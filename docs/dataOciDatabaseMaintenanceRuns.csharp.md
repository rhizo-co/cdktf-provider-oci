# `dataOciDatabaseMaintenanceRuns` Submodule <a name="`dataOciDatabaseMaintenanceRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMaintenanceRuns <a name="DataOciDatabaseMaintenanceRuns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs oci_database_maintenance_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMaintenanceRuns(Construct Scope, string Id, DataOciDatabaseMaintenanceRunsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig">DataOciDatabaseMaintenanceRunsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig">DataOciDatabaseMaintenanceRunsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceSubtype">ResetMaintenanceSubtype</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceType">ResetMaintenanceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceId">ResetTargetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceType">ResetTargetResourceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintenanceSubtype` <a name="ResetMaintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceSubtype"></a>

```csharp
private void ResetMaintenanceSubtype()
```

##### `ResetMaintenanceType` <a name="ResetMaintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceType"></a>

```csharp
private void ResetMaintenanceType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTargetResourceId` <a name="ResetTargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceId"></a>

```csharp
private void ResetTargetResourceId()
```

##### `ResetTargetResourceType` <a name="ResetTargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceType"></a>

```csharp
private void ResetTargetResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMaintenanceRuns resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseMaintenanceRuns.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseMaintenanceRuns.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseMaintenanceRuns.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseMaintenanceRuns.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseMaintenanceRuns resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseMaintenanceRuns to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseMaintenanceRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMaintenanceRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList">DataOciDatabaseMaintenanceRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceRuns">MaintenanceRuns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList">DataOciDatabaseMaintenanceRunsMaintenanceRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtypeInput">MaintenanceSubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceTypeInput">MaintenanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtype">MaintenanceSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceType">MaintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filter"></a>

```csharp
public DataOciDatabaseMaintenanceRunsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList">DataOciDatabaseMaintenanceRunsFilterList</a>

---

##### `MaintenanceRuns`<sup>Required</sup> <a name="MaintenanceRuns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceRuns"></a>

```csharp
public DataOciDatabaseMaintenanceRunsMaintenanceRunsList MaintenanceRuns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList">DataOciDatabaseMaintenanceRunsMaintenanceRunsList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintenanceSubtypeInput`<sup>Optional</sup> <a name="MaintenanceSubtypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtypeInput"></a>

```csharp
public string MaintenanceSubtypeInput { get; }
```

- *Type:* string

---

##### `MaintenanceTypeInput`<sup>Optional</sup> <a name="MaintenanceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceTypeInput"></a>

```csharp
public string MaintenanceTypeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceTypeInput"></a>

```csharp
public string TargetResourceTypeInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintenanceSubtype`<sup>Required</sup> <a name="MaintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtype"></a>

```csharp
public string MaintenanceSubtype { get; }
```

- *Type:* string

---

##### `MaintenanceType`<sup>Required</sup> <a name="MaintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceType"></a>

```csharp
public string MaintenanceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMaintenanceRunsConfig <a name="DataOciDatabaseMaintenanceRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMaintenanceRunsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AvailabilityDomain = null,
    object Filter = null,
    string Id = null,
    string MaintenanceSubtype = null,
    string MaintenanceType = null,
    string State = null,
    string TargetResourceId = null,
    string TargetResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceSubtype">MaintenanceSubtype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceType">MaintenanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#filter DataOciDatabaseMaintenanceRuns#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceSubtype`<sup>Optional</sup> <a name="MaintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceSubtype"></a>

```csharp
public string MaintenanceSubtype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}.

---

##### `MaintenanceType`<sup>Optional</sup> <a name="MaintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceType"></a>

```csharp
public string MaintenanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}.

---

##### `TargetResourceId`<sup>Optional</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}.

---

##### `TargetResourceType`<sup>Optional</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}.

---

### DataOciDatabaseMaintenanceRunsFilter <a name="DataOciDatabaseMaintenanceRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMaintenanceRunsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#name DataOciDatabaseMaintenanceRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#values DataOciDatabaseMaintenanceRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#regex DataOciDatabaseMaintenanceRuns#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#name DataOciDatabaseMaintenanceRuns#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#values DataOciDatabaseMaintenanceRuns#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#regex DataOciDatabaseMaintenanceRuns#regex}.

---

### DataOciDatabaseMaintenanceRunsMaintenanceRuns <a name="DataOciDatabaseMaintenanceRunsMaintenanceRuns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMaintenanceRunsMaintenanceRuns {

};
```


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMaintenanceRunsFilterList <a name="DataOciDatabaseMaintenanceRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMaintenanceRunsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get"></a>

```csharp
private DataOciDatabaseMaintenanceRunsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseMaintenanceRunsFilterOutputReference <a name="DataOciDatabaseMaintenanceRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMaintenanceRunsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get"></a>

```csharp
private DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">EstimatedDbServerPatchingTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">EstimatedNetworkSwitchesPatchingTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">EstimatedStorageServerPatchingTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">TotalEstimatedPatchingTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedDbServerPatchingTime`<sup>Required</sup> <a name="EstimatedDbServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```csharp
public double EstimatedDbServerPatchingTime { get; }
```

- *Type:* double

---

##### `EstimatedNetworkSwitchesPatchingTime`<sup>Required</sup> <a name="EstimatedNetworkSwitchesPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```csharp
public double EstimatedNetworkSwitchesPatchingTime { get; }
```

- *Type:* double

---

##### `EstimatedStorageServerPatchingTime`<sup>Required</sup> <a name="EstimatedStorageServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```csharp
public double EstimatedStorageServerPatchingTime { get; }
```

- *Type:* double

---

##### `TotalEstimatedPatchingTime`<sup>Required</sup> <a name="TotalEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```csharp
public double TotalEstimatedPatchingTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime</a>

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsList <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMaintenanceRunsMaintenanceRunsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get"></a>

```csharp
private DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentCustomActionTimeoutInMins">CurrentCustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentPatchingComponent">CurrentPatchingComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedComponentPatchingStartTime">EstimatedComponentPatchingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedPatchingTime">EstimatedPatchingTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isDstFileUpdateEnabled">IsDstFileUpdateEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceSubtype">MaintenanceSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceType">MaintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchFailureCount">PatchFailureCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchId">PatchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingEndTime">PatchingEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStartTime">PatchingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStatus">PatchingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchType">PatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.peerMaintenanceRunId">PeerMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetDbServerVersion">TargetDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetStorageServerVersion">TargetStorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeScheduled">TimeScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns">DataOciDatabaseMaintenanceRunsMaintenanceRuns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CurrentCustomActionTimeoutInMins`<sup>Required</sup> <a name="CurrentCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentCustomActionTimeoutInMins"></a>

```csharp
public double CurrentCustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `CurrentPatchingComponent`<sup>Required</sup> <a name="CurrentPatchingComponent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentPatchingComponent"></a>

```csharp
public string CurrentPatchingComponent { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EstimatedComponentPatchingStartTime`<sup>Required</sup> <a name="EstimatedComponentPatchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedComponentPatchingStartTime"></a>

```csharp
public string EstimatedComponentPatchingStartTime { get; }
```

- *Type:* string

---

##### `EstimatedPatchingTime`<sup>Required</sup> <a name="EstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedPatchingTime"></a>

```csharp
public DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList EstimatedPatchingTime { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDstFileUpdateEnabled`<sup>Required</sup> <a name="IsDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isDstFileUpdateEnabled"></a>

```csharp
public IResolvable IsDstFileUpdateEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaintenanceSubtype`<sup>Required</sup> <a name="MaintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceSubtype"></a>

```csharp
public string MaintenanceSubtype { get; }
```

- *Type:* string

---

##### `MaintenanceType`<sup>Required</sup> <a name="MaintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceType"></a>

```csharp
public string MaintenanceType { get; }
```

- *Type:* string

---

##### `PatchFailureCount`<sup>Required</sup> <a name="PatchFailureCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchFailureCount"></a>

```csharp
public double PatchFailureCount { get; }
```

- *Type:* double

---

##### `PatchId`<sup>Required</sup> <a name="PatchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchId"></a>

```csharp
public string PatchId { get; }
```

- *Type:* string

---

##### `PatchingEndTime`<sup>Required</sup> <a name="PatchingEndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingEndTime"></a>

```csharp
public string PatchingEndTime { get; }
```

- *Type:* string

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `PatchingStartTime`<sup>Required</sup> <a name="PatchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStartTime"></a>

```csharp
public string PatchingStartTime { get; }
```

- *Type:* string

---

##### `PatchingStatus`<sup>Required</sup> <a name="PatchingStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStatus"></a>

```csharp
public string PatchingStatus { get; }
```

- *Type:* string

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchType"></a>

```csharp
public string PatchType { get; }
```

- *Type:* string

---

##### `PeerMaintenanceRunId`<sup>Required</sup> <a name="PeerMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.peerMaintenanceRunId"></a>

```csharp
public string PeerMaintenanceRunId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetDbServerVersion`<sup>Required</sup> <a name="TargetDbServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetDbServerVersion"></a>

```csharp
public string TargetDbServerVersion { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; }
```

- *Type:* string

---

##### `TargetStorageServerVersion`<sup>Required</sup> <a name="TargetStorageServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetStorageServerVersion"></a>

```csharp
public string TargetStorageServerVersion { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeScheduled`<sup>Required</sup> <a name="TimeScheduled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeScheduled"></a>

```csharp
public string TimeScheduled { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseMaintenanceRunsMaintenanceRuns InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns">DataOciDatabaseMaintenanceRunsMaintenanceRuns</a>

---



