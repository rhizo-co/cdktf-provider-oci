# `dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets` Submodule <a name="`dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets oci_fleet_apps_management_scheduler_definition_scheduled_fleets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets(Construct Scope, string Id, DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.scheduledFleetCollection">ScheduledFleetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionIdInput">SchedulerDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionId">SchedulerDefinitionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filter"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList</a>

---

##### `ScheduledFleetCollection`<sup>Required</sup> <a name="ScheduledFleetCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.scheduledFleetCollection"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList ScheduledFleetCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SchedulerDefinitionIdInput`<sup>Optional</sup> <a name="SchedulerDefinitionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionIdInput"></a>

```csharp
public string SchedulerDefinitionIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SchedulerDefinitionId`<sup>Required</sup> <a name="SchedulerDefinitionId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionId"></a>

```csharp
public string SchedulerDefinitionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SchedulerDefinitionId,
    string CompartmentId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.schedulerDefinitionId">SchedulerDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#scheduler_definition_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#compartment_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#display_name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SchedulerDefinitionId`<sup>Required</sup> <a name="SchedulerDefinitionId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.schedulerDefinitionId"></a>

```csharp
public string SchedulerDefinitionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#scheduler_definition_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#compartment_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#display_name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#filter DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#values DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#regex DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#values DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#regex DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#regex}.

---

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection {

};
```


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.actionGroupTypes">ActionGroupTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.applicationTypes">ApplicationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedResources">CountOfAffectedResources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedTargets">CountOfAffectedTargets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.tenancyId">TenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionGroupTypes`<sup>Required</sup> <a name="ActionGroupTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.actionGroupTypes"></a>

```csharp
public string[] ActionGroupTypes { get; }
```

- *Type:* string[]

---

##### `ApplicationTypes`<sup>Required</sup> <a name="ApplicationTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.applicationTypes"></a>

```csharp
public string[] ApplicationTypes { get; }
```

- *Type:* string[]

---

##### `CountOfAffectedResources`<sup>Required</sup> <a name="CountOfAffectedResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedResources"></a>

```csharp
public double CountOfAffectedResources { get; }
```

- *Type:* double

---

##### `CountOfAffectedTargets`<sup>Required</sup> <a name="CountOfAffectedTargets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedTargets"></a>

```csharp
public double CountOfAffectedTargets { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.tenancyId"></a>

```csharp
public string TenancyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.items"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection</a>

---



