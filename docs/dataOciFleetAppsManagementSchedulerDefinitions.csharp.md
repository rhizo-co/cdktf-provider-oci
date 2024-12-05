# `dataOciFleetAppsManagementSchedulerDefinitions` Submodule <a name="`dataOciFleetAppsManagementSchedulerDefinitions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementSchedulerDefinitions <a name="DataOciFleetAppsManagementSchedulerDefinitions" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions oci_fleet_apps_management_scheduler_definitions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitions(Construct Scope, string Id, DataOciFleetAppsManagementSchedulerDefinitionsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig">DataOciFleetAppsManagementSchedulerDefinitionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig">DataOciFleetAppsManagementSchedulerDefinitionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFleetId">ResetFleetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetMaintenanceWindowId">ResetMaintenanceWindowId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFleetId` <a name="ResetFleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFleetId"></a>

```csharp
private void ResetFleetId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintenanceWindowId` <a name="ResetMaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetMaintenanceWindowId"></a>

```csharp
private void ResetMaintenanceWindowId()
```

##### `ResetProduct` <a name="ResetProduct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetProduct"></a>

```csharp
private void ResetProduct()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinitions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinitions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinitions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinitions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerDefinitions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementSchedulerDefinitions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerDefinitions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList">DataOciFleetAppsManagementSchedulerDefinitionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.schedulerDefinitionCollection">SchedulerDefinitionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetIdInput">FleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowIdInput">MaintenanceWindowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filter"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList">DataOciFleetAppsManagementSchedulerDefinitionsFilterList</a>

---

##### `SchedulerDefinitionCollection`<sup>Required</sup> <a name="SchedulerDefinitionCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.schedulerDefinitionCollection"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList SchedulerDefinitionCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetIdInput"></a>

```csharp
public string FleetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowIdInput`<sup>Optional</sup> <a name="MaintenanceWindowIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowIdInput"></a>

```csharp
public string MaintenanceWindowIdInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintenanceWindowId`<sup>Required</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowId"></a>

```csharp
public string MaintenanceWindowId { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionsConfig <a name="DataOciFleetAppsManagementSchedulerDefinitionsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsConfig {
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
    string FleetId = null,
    string Id = null,
    string MaintenanceWindowId = null,
    string Product = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#compartment_id DataOciFleetAppsManagementSchedulerDefinitions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#display_name DataOciFleetAppsManagementSchedulerDefinitions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.fleetId">FleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#fleet_id DataOciFleetAppsManagementSchedulerDefinitions#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#id DataOciFleetAppsManagementSchedulerDefinitions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#maintenance_window_id DataOciFleetAppsManagementSchedulerDefinitions#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.product">Product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#product DataOciFleetAppsManagementSchedulerDefinitions#product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#state DataOciFleetAppsManagementSchedulerDefinitions#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#compartment_id DataOciFleetAppsManagementSchedulerDefinitions#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#display_name DataOciFleetAppsManagementSchedulerDefinitions#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#filter DataOciFleetAppsManagementSchedulerDefinitions#filter}

---

##### `FleetId`<sup>Optional</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.fleetId"></a>

```csharp
public string FleetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#fleet_id DataOciFleetAppsManagementSchedulerDefinitions#fleet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#id DataOciFleetAppsManagementSchedulerDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindowId`<sup>Optional</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.maintenanceWindowId"></a>

```csharp
public string MaintenanceWindowId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#maintenance_window_id DataOciFleetAppsManagementSchedulerDefinitions#maintenance_window_id}.

---

##### `Product`<sup>Optional</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#product DataOciFleetAppsManagementSchedulerDefinitions#product}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#state DataOciFleetAppsManagementSchedulerDefinitions#state}.

---

### DataOciFleetAppsManagementSchedulerDefinitionsFilter <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#name DataOciFleetAppsManagementSchedulerDefinitions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#values DataOciFleetAppsManagementSchedulerDefinitions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#regex DataOciFleetAppsManagementSchedulerDefinitions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#name DataOciFleetAppsManagementSchedulerDefinitions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#values DataOciFleetAppsManagementSchedulerDefinitions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#regex DataOciFleetAppsManagementSchedulerDefinitions#regex}.

---

### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection {

};
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems {

};
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups {

};
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks {

};
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters {

};
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments {

};
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementSchedulerDefinitionsFilterList <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.applicationType">ApplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.lifecycleOperation">LifecycleOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.runbookId">RunbookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.subjects">Subjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.applicationType"></a>

```csharp
public string ApplicationType { get; }
```

- *Type:* string

---

##### `LifecycleOperation`<sup>Required</sup> <a name="LifecycleOperation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.lifecycleOperation"></a>

```csharp
public string LifecycleOperation { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.runbookId"></a>

```csharp
public string RunbookId { get; }
```

- *Type:* string

---

##### `Subjects`<sup>Required</sup> <a name="Subjects" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.subjects"></a>

```csharp
public string[] Subjects { get; }
```

- *Type:* string[]

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroups">ActionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroupTypes">ActionGroupTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.activityInitiationCutOff">ActivityInitiationCutOff</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.applicationTypes">ApplicationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedActionGroups">CountOfAffectedActionGroups</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedResources">CountOfAffectedResources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedTargets">CountOfAffectedTargets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleOperations">LifecycleOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.products">Products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.runBooks">RunBooks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.schedule">Schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeOfNextRun">TimeOfNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionGroups`<sup>Required</sup> <a name="ActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroups"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList ActionGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList</a>

---

##### `ActionGroupTypes`<sup>Required</sup> <a name="ActionGroupTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroupTypes"></a>

```csharp
public string[] ActionGroupTypes { get; }
```

- *Type:* string[]

---

##### `ActivityInitiationCutOff`<sup>Required</sup> <a name="ActivityInitiationCutOff" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.activityInitiationCutOff"></a>

```csharp
public double ActivityInitiationCutOff { get; }
```

- *Type:* double

---

##### `ApplicationTypes`<sup>Required</sup> <a name="ApplicationTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.applicationTypes"></a>

```csharp
public string[] ApplicationTypes { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CountOfAffectedActionGroups`<sup>Required</sup> <a name="CountOfAffectedActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedActionGroups"></a>

```csharp
public double CountOfAffectedActionGroups { get; }
```

- *Type:* double

---

##### `CountOfAffectedResources`<sup>Required</sup> <a name="CountOfAffectedResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedResources"></a>

```csharp
public double CountOfAffectedResources { get; }
```

- *Type:* double

---

##### `CountOfAffectedTargets`<sup>Required</sup> <a name="CountOfAffectedTargets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedTargets"></a>

```csharp
public double CountOfAffectedTargets { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleOperations`<sup>Required</sup> <a name="LifecycleOperations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleOperations"></a>

```csharp
public string[] LifecycleOperations { get; }
```

- *Type:* string[]

---

##### `Products`<sup>Required</sup> <a name="Products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.products"></a>

```csharp
public string[] Products { get; }
```

- *Type:* string[]

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.resourceRegion"></a>

```csharp
public string ResourceRegion { get; }
```

- *Type:* string

---

##### `RunBooks`<sup>Required</sup> <a name="RunBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.runBooks"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList RunBooks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.schedule"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList Schedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfNextRun`<sup>Required</sup> <a name="TimeOfNextRun" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeOfNextRun"></a>

```csharp
public string TimeOfNextRun { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.arguments">Arguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.stepName">StepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.arguments"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList Arguments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList</a>

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.stepName"></a>

```csharp
public string StepName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.inputParameters">InputParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.inputParameters"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList InputParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.executionStartdate">ExecutionStartdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.recurrences">Recurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `ExecutionStartdate`<sup>Required</sup> <a name="ExecutionStartdate" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.executionStartdate"></a>

```csharp
public string ExecutionStartdate { get; }
```

- *Type:* string

---

##### `MaintenanceWindowId`<sup>Required</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.maintenanceWindowId"></a>

```csharp
public string MaintenanceWindowId { get; }
```

- *Type:* string

---

##### `Recurrences`<sup>Required</sup> <a name="Recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.recurrences"></a>

```csharp
public string Recurrences { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.items"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection</a>

---



