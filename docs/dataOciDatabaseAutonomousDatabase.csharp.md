# `dataOciDatabaseAutonomousDatabase` Submodule <a name="`dataOciDatabaseAutonomousDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabase <a name="DataOciDatabaseAutonomousDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database oci_database_autonomous_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabase(Construct Scope, string Id, DataOciDatabaseAutonomousDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig">DataOciDatabaseAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig">DataOciDatabaseAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">ActualUsedDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.allocatedStorageSizeInTbs">AllocatedStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.apexDetails">ApexDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList">DataOciDatabaseAutonomousDatabaseApexDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsed">ArePrimaryWhitelistedIpsUsed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseBackupId">AutonomousDatabaseBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleType">AutonomousMaintenanceScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.backupConfig">BackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList">DataOciDatabaseAutonomousDatabaseBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.byolComputeCountLimit">ByolComputeCountLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cloneType">CloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList">DataOciDatabaseAutonomousDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.connectionUrls">ConnectionUrls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList">DataOciDatabaseAutonomousDatabaseConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.customerContacts">CustomerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList">DataOciDatabaseAutonomousDatabaseCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.databaseManagementStatus">DatabaseManagementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataguardRegionType">DataguardRegionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataSafeStatus">DataSafeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbToolsDetails">DbToolsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList">DataOciDatabaseAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.disasterRecoveryRegionType">DisasterRecoveryRegionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.disasterRecoveryType">DisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList">DataOciDatabaseAutonomousDatabaseEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.encryptionKeyHistoryEntry">EncryptionKeyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.failedDataRecoveryInSeconds">FailedDataRecoveryInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.infrastructureType">InfrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.inMemoryAreaInGbs">InMemoryAreaInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.inMemoryPercentage">InMemoryPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAccessControlEnabled">IsAccessControlEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabled">IsAutoScalingForStorageEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDataGuardEnabled">IsDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDedicated">IsDedicated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDevTier">IsDevTier</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isFreeTier">IsFreeTier</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isMtlsConnectionRequired">IsMtlsConnectionRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isPreview">IsPreview</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAccepted">IsPreviewVersionWithServiceTermsAccepted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isReconnectCloneEnabled">IsReconnectCloneEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isRemoteDataGuardEnabled">IsRemoteDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isReplicateAutomaticBackups">IsReplicateAutomaticBackups</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isShrinkOnly">IsShrinkOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyHistoryEntry">KeyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList">DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyStoreId">KeyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyStoreWalletName">KeyStoreWalletName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyLifecycleDetails">KmsKeyLifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localDisasterRecoveryType">LocalDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localStandbyDb">LocalStandbyDb</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList">DataOciDatabaseAutonomousDatabaseLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.maxCpuCoreCount">MaxCpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.netServicesArchitecture">NetServicesArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.nextLongTermBackupTimeStamp">NextLongTermBackupTimeStamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.ocpuCount">OcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.operationsInsightsStatus">OperationsInsightsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.peerDbIds">PeerDbIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.permissionLevel">PermissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpoint">PrivateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.provisionableCpus">ProvisionableCpus</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.publicConnectionUrls">PublicConnectionUrls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.publicEndpoint">PublicEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.refreshableMode">RefreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.refreshableStatus">RefreshableStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.remoteDisasterRecoveryConfiguration">RemoteDisasterRecoveryConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.remoteDisasterRecoveryType">RemoteDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.resourcePoolSummary">ResourcePoolSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList">DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.rotateKeyTrigger">RotateKeyTrigger</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.scheduledOperations">ScheduledOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList">DataOciDatabaseAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.secretVersionNumber">SecretVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.securityAttributes">SecurityAttributes</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.shrinkAdbTrigger">ShrinkAdbTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.sourceId">SourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.standbyDb">StandbyDb</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList">DataOciDatabaseAutonomousDatabaseStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.standbyWhitelistedIps">StandbyWhitelistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.supportedRegionsToCloneTo">SupportedRegionsToCloneTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.switchoverTo">SwitchoverTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.switchoverToRemotePeerId">SwitchoverToRemotePeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDataGuardRoleChanged">TimeDataGuardRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase">TimeDeletionOfFreeAutonomousDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDisasterRecoveryRoleChanged">TimeDisasterRecoveryRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeLocalDataGuardEnabled">TimeLocalDataGuardEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeMaintenanceBegin">TimeMaintenanceBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeMaintenanceEnd">TimeMaintenanceEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfJoiningResourcePool">TimeOfJoiningResourcePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastFailover">TimeOfLastFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastRefresh">TimeOfLastRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastRefreshPoint">TimeOfLastRefreshPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastSwitchover">TimeOfLastSwitchover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfNextRefresh">TimeOfNextRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase">TimeReclamationOfFreeAutonomousDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeUndeleted">TimeUndeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeUntilReconnectCloneEnabled">TimeUntilReconnectCloneEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.totalBackupStorageSizeInGbs">TotalBackupStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.usedDataStorageSizeInGbs">UsedDataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.usedDataStorageSizeInTbs">UsedDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStamp">UseLatestAvailableBackupTimeStamp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.whitelistedIps">WhitelistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ActualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```csharp
public double ActualUsedDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AllocatedStorageSizeInTbs`<sup>Required</sup> <a name="AllocatedStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```csharp
public double AllocatedStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `ApexDetails`<sup>Required</sup> <a name="ApexDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.apexDetails"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseApexDetailsList ApexDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList">DataOciDatabaseAutonomousDatabaseApexDetailsList</a>

---

##### `ArePrimaryWhitelistedIpsUsed`<sup>Required</sup> <a name="ArePrimaryWhitelistedIpsUsed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsed"></a>

```csharp
public IResolvable ArePrimaryWhitelistedIpsUsed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseBackupId`<sup>Required</sup> <a name="AutonomousDatabaseBackupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseBackupId"></a>

```csharp
public string AutonomousDatabaseBackupId { get; }
```

- *Type:* string

---

##### `AutonomousMaintenanceScheduleType`<sup>Required</sup> <a name="AutonomousMaintenanceScheduleType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```csharp
public string AutonomousMaintenanceScheduleType { get; }
```

- *Type:* string

---

##### `AutoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="AutoRefreshFrequencyInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```csharp
public double AutoRefreshFrequencyInSeconds { get; }
```

- *Type:* double

---

##### `AutoRefreshPointLagInSeconds`<sup>Required</sup> <a name="AutoRefreshPointLagInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```csharp
public double AutoRefreshPointLagInSeconds { get; }
```

- *Type:* double

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.availableUpgradeVersions"></a>

```csharp
public string[] AvailableUpgradeVersions { get; }
```

- *Type:* string[]

---

##### `BackupConfig`<sup>Required</sup> <a name="BackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.backupConfig"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseBackupConfigList BackupConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList">DataOciDatabaseAutonomousDatabaseBackupConfigList</a>

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```csharp
public double BackupRetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `ByolComputeCountLimit`<sup>Required</sup> <a name="ByolComputeCountLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.byolComputeCountLimit"></a>

```csharp
public double ByolComputeCountLimit { get; }
```

- *Type:* double

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cloneType"></a>

```csharp
public string CloneType { get; }
```

- *Type:* string

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.clusterPlacementGroupId"></a>

```csharp
public string ClusterPlacementGroupId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.connectionStrings"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList">DataOciDatabaseAutonomousDatabaseConnectionStringsList</a>

---

##### `ConnectionUrls`<sup>Required</sup> <a name="ConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.connectionUrls"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseConnectionUrlsList ConnectionUrls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList">DataOciDatabaseAutonomousDatabaseConnectionUrlsList</a>

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.customerContacts"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseCustomerContactsList CustomerContacts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList">DataOciDatabaseAutonomousDatabaseCustomerContactsList</a>

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; }
```

- *Type:* string

---

##### `DatabaseManagementStatus`<sup>Required</sup> <a name="DatabaseManagementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.databaseManagementStatus"></a>

```csharp
public string DatabaseManagementStatus { get; }
```

- *Type:* string

---

##### `DataguardRegionType`<sup>Required</sup> <a name="DataguardRegionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataguardRegionType"></a>

```csharp
public string DataguardRegionType { get; }
```

- *Type:* string

---

##### `DataSafeStatus`<sup>Required</sup> <a name="DataSafeStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataSafeStatus"></a>

```csharp
public string DataSafeStatus { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbToolsDetails`<sup>Required</sup> <a name="DbToolsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbToolsDetails"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseDbToolsDetailsList DbToolsDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList">DataOciDatabaseAutonomousDatabaseDbToolsDetailsList</a>

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisasterRecoveryRegionType`<sup>Required</sup> <a name="DisasterRecoveryRegionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.disasterRecoveryRegionType"></a>

```csharp
public string DisasterRecoveryRegionType { get; }
```

- *Type:* string

---

##### `DisasterRecoveryType`<sup>Required</sup> <a name="DisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.disasterRecoveryType"></a>

```csharp
public string DisasterRecoveryType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.encryptionKey"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseEncryptionKeyList EncryptionKey { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList">DataOciDatabaseAutonomousDatabaseEncryptionKeyList</a>

---

##### `EncryptionKeyHistoryEntry`<sup>Required</sup> <a name="EncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.encryptionKeyHistoryEntry"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList EncryptionKeyHistoryEntry { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList</a>

---

##### `FailedDataRecoveryInSeconds`<sup>Required</sup> <a name="FailedDataRecoveryInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.failedDataRecoveryInSeconds"></a>

```csharp
public double FailedDataRecoveryInSeconds { get; }
```

- *Type:* double

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.infrastructureType"></a>

```csharp
public string InfrastructureType { get; }
```

- *Type:* string

---

##### `InMemoryAreaInGbs`<sup>Required</sup> <a name="InMemoryAreaInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.inMemoryAreaInGbs"></a>

```csharp
public double InMemoryAreaInGbs { get; }
```

- *Type:* double

---

##### `InMemoryPercentage`<sup>Required</sup> <a name="InMemoryPercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.inMemoryPercentage"></a>

```csharp
public double InMemoryPercentage { get; }
```

- *Type:* double

---

##### `IsAccessControlEnabled`<sup>Required</sup> <a name="IsAccessControlEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAccessControlEnabled"></a>

```csharp
public IResolvable IsAccessControlEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAutoScalingEnabled"></a>

```csharp
public IResolvable IsAutoScalingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsAutoScalingForStorageEnabled`<sup>Required</sup> <a name="IsAutoScalingForStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```csharp
public IResolvable IsAutoScalingForStorageEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDataGuardEnabled`<sup>Required</sup> <a name="IsDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDataGuardEnabled"></a>

```csharp
public IResolvable IsDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDedicated`<sup>Required</sup> <a name="IsDedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDedicated"></a>

```csharp
public IResolvable IsDedicated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDevTier`<sup>Required</sup> <a name="IsDevTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isDevTier"></a>

```csharp
public IResolvable IsDevTier { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsFreeTier`<sup>Required</sup> <a name="IsFreeTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isFreeTier"></a>

```csharp
public IResolvable IsFreeTier { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsLocalDataGuardEnabled`<sup>Required</sup> <a name="IsLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```csharp
public IResolvable IsLocalDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMtlsConnectionRequired`<sup>Required</sup> <a name="IsMtlsConnectionRequired" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```csharp
public IResolvable IsMtlsConnectionRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPreview`<sup>Required</sup> <a name="IsPreview" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isPreview"></a>

```csharp
public IResolvable IsPreview { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPreviewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="IsPreviewVersionWithServiceTermsAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAccepted"></a>

```csharp
public IResolvable IsPreviewVersionWithServiceTermsAccepted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsReconnectCloneEnabled`<sup>Required</sup> <a name="IsReconnectCloneEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isReconnectCloneEnabled"></a>

```csharp
public IResolvable IsReconnectCloneEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isRefreshableClone"></a>

```csharp
public IResolvable IsRefreshableClone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRemoteDataGuardEnabled`<sup>Required</sup> <a name="IsRemoteDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isRemoteDataGuardEnabled"></a>

```csharp
public IResolvable IsRemoteDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsReplicateAutomaticBackups`<sup>Required</sup> <a name="IsReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isReplicateAutomaticBackups"></a>

```csharp
public IResolvable IsReplicateAutomaticBackups { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsShrinkOnly`<sup>Required</sup> <a name="IsShrinkOnly" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.isShrinkOnly"></a>

```csharp
public IResolvable IsShrinkOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KeyHistoryEntry`<sup>Required</sup> <a name="KeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyHistoryEntry"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList KeyHistoryEntry { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList">DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList</a>

---

##### `KeyStoreId`<sup>Required</sup> <a name="KeyStoreId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyStoreId"></a>

```csharp
public string KeyStoreId { get; }
```

- *Type:* string

---

##### `KeyStoreWalletName`<sup>Required</sup> <a name="KeyStoreWalletName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.keyStoreWalletName"></a>

```csharp
public string KeyStoreWalletName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyLifecycleDetails`<sup>Required</sup> <a name="KmsKeyLifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyLifecycleDetails"></a>

```csharp
public string KmsKeyLifecycleDetails { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```csharp
public double LocalAdgAutoFailoverMaxDataLossLimit { get; }
```

- *Type:* double

---

##### `LocalDisasterRecoveryType`<sup>Required</sup> <a name="LocalDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localDisasterRecoveryType"></a>

```csharp
public string LocalDisasterRecoveryType { get; }
```

- *Type:* string

---

##### `LocalStandbyDb`<sup>Required</sup> <a name="LocalStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.localStandbyDb"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseLocalStandbyDbList LocalStandbyDb { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList">DataOciDatabaseAutonomousDatabaseLocalStandbyDbList</a>

---

##### `LongTermBackupSchedule`<sup>Required</sup> <a name="LongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.longTermBackupSchedule"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList LongTermBackupSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `MaxCpuCoreCount`<sup>Required</sup> <a name="MaxCpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.maxCpuCoreCount"></a>

```csharp
public double MaxCpuCoreCount { get; }
```

- *Type:* double

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs"></a>

```csharp
public double MemoryPerOracleComputeUnitInGbs { get; }
```

- *Type:* double

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `NetServicesArchitecture`<sup>Required</sup> <a name="NetServicesArchitecture" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.netServicesArchitecture"></a>

```csharp
public string NetServicesArchitecture { get; }
```

- *Type:* string

---

##### `NextLongTermBackupTimeStamp`<sup>Required</sup> <a name="NextLongTermBackupTimeStamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.nextLongTermBackupTimeStamp"></a>

```csharp
public string NextLongTermBackupTimeStamp { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.ocpuCount"></a>

```csharp
public double OcpuCount { get; }
```

- *Type:* double

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `OperationsInsightsStatus`<sup>Required</sup> <a name="OperationsInsightsStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.operationsInsightsStatus"></a>

```csharp
public string OperationsInsightsStatus { get; }
```

- *Type:* string

---

##### `PeerDbIds`<sup>Required</sup> <a name="PeerDbIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.peerDbIds"></a>

```csharp
public string[] PeerDbIds { get; }
```

- *Type:* string[]

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.permissionLevel"></a>

```csharp
public string PermissionLevel { get; }
```

- *Type:* string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpoint"></a>

```csharp
public string PrivateEndpoint { get; }
```

- *Type:* string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.privateEndpointLabel"></a>

```csharp
public string PrivateEndpointLabel { get; }
```

- *Type:* string

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.provisionableCpus"></a>

```csharp
public double[] ProvisionableCpus { get; }
```

- *Type:* double[]

---

##### `PublicConnectionUrls`<sup>Required</sup> <a name="PublicConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.publicConnectionUrls"></a>

```csharp
public DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList PublicConnectionUrls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList</a>

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.publicEndpoint"></a>

```csharp
public string PublicEndpoint { get; }
```

- *Type:* string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.refreshableMode"></a>

```csharp
public string RefreshableMode { get; }
```

- *Type:* string

---

##### `RefreshableStatus`<sup>Required</sup> <a name="RefreshableStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.refreshableStatus"></a>

```csharp
public string RefreshableStatus { get; }
```

- *Type:* string

---

##### `RemoteDisasterRecoveryConfiguration`<sup>Required</sup> <a name="RemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.remoteDisasterRecoveryConfiguration"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList RemoteDisasterRecoveryConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList</a>

---

##### `RemoteDisasterRecoveryType`<sup>Required</sup> <a name="RemoteDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.remoteDisasterRecoveryType"></a>

```csharp
public string RemoteDisasterRecoveryType { get; }
```

- *Type:* string

---

##### `ResourcePoolLeaderId`<sup>Required</sup> <a name="ResourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.resourcePoolLeaderId"></a>

```csharp
public string ResourcePoolLeaderId { get; }
```

- *Type:* string

---

##### `ResourcePoolSummary`<sup>Required</sup> <a name="ResourcePoolSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.resourcePoolSummary"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList ResourcePoolSummary { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList">DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList</a>

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `RotateKeyTrigger`<sup>Required</sup> <a name="RotateKeyTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.rotateKeyTrigger"></a>

```csharp
public IResolvable RotateKeyTrigger { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ScheduledOperations`<sup>Required</sup> <a name="ScheduledOperations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.scheduledOperations"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseScheduledOperationsList ScheduledOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList">DataOciDatabaseAutonomousDatabaseScheduledOperationsList</a>

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretVersionNumber`<sup>Required</sup> <a name="SecretVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.secretVersionNumber"></a>

```csharp
public double SecretVersionNumber { get; }
```

- *Type:* double

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.securityAttributes"></a>

```csharp
public StringMap SecurityAttributes { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.serviceConsoleUrl"></a>

```csharp
public string ServiceConsoleUrl { get; }
```

- *Type:* string

---

##### `ShrinkAdbTrigger`<sup>Required</sup> <a name="ShrinkAdbTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.shrinkAdbTrigger"></a>

```csharp
public double ShrinkAdbTrigger { get; }
```

- *Type:* double

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.sourceId"></a>

```csharp
public string SourceId { get; }
```

- *Type:* string

---

##### `StandbyDb`<sup>Required</sup> <a name="StandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.standbyDb"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseStandbyDbList StandbyDb { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList">DataOciDatabaseAutonomousDatabaseStandbyDbList</a>

---

##### `StandbyWhitelistedIps`<sup>Required</sup> <a name="StandbyWhitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.standbyWhitelistedIps"></a>

```csharp
public string[] StandbyWhitelistedIps { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `SupportedRegionsToCloneTo`<sup>Required</sup> <a name="SupportedRegionsToCloneTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.supportedRegionsToCloneTo"></a>

```csharp
public string[] SupportedRegionsToCloneTo { get; }
```

- *Type:* string[]

---

##### `SwitchoverTo`<sup>Required</sup> <a name="SwitchoverTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.switchoverTo"></a>

```csharp
public string SwitchoverTo { get; }
```

- *Type:* string

---

##### `SwitchoverToRemotePeerId`<sup>Required</sup> <a name="SwitchoverToRemotePeerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.switchoverToRemotePeerId"></a>

```csharp
public string SwitchoverToRemotePeerId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeDataGuardRoleChanged`<sup>Required</sup> <a name="TimeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDataGuardRoleChanged"></a>

```csharp
public string TimeDataGuardRoleChanged { get; }
```

- *Type:* string

---

##### `TimeDeletionOfFreeAutonomousDatabase`<sup>Required</sup> <a name="TimeDeletionOfFreeAutonomousDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase"></a>

```csharp
public string TimeDeletionOfFreeAutonomousDatabase { get; }
```

- *Type:* string

---

##### `TimeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="TimeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeDisasterRecoveryRoleChanged"></a>

```csharp
public string TimeDisasterRecoveryRoleChanged { get; }
```

- *Type:* string

---

##### `TimeLocalDataGuardEnabled`<sup>Required</sup> <a name="TimeLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeLocalDataGuardEnabled"></a>

```csharp
public string TimeLocalDataGuardEnabled { get; }
```

- *Type:* string

---

##### `TimeMaintenanceBegin`<sup>Required</sup> <a name="TimeMaintenanceBegin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeMaintenanceBegin"></a>

```csharp
public string TimeMaintenanceBegin { get; }
```

- *Type:* string

---

##### `TimeMaintenanceEnd`<sup>Required</sup> <a name="TimeMaintenanceEnd" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeMaintenanceEnd"></a>

```csharp
public string TimeMaintenanceEnd { get; }
```

- *Type:* string

---

##### `TimeOfAutoRefreshStart`<sup>Required</sup> <a name="TimeOfAutoRefreshStart" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```csharp
public string TimeOfAutoRefreshStart { get; }
```

- *Type:* string

---

##### `TimeOfJoiningResourcePool`<sup>Required</sup> <a name="TimeOfJoiningResourcePool" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfJoiningResourcePool"></a>

```csharp
public string TimeOfJoiningResourcePool { get; }
```

- *Type:* string

---

##### `TimeOfLastFailover`<sup>Required</sup> <a name="TimeOfLastFailover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastFailover"></a>

```csharp
public string TimeOfLastFailover { get; }
```

- *Type:* string

---

##### `TimeOfLastRefresh`<sup>Required</sup> <a name="TimeOfLastRefresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastRefresh"></a>

```csharp
public string TimeOfLastRefresh { get; }
```

- *Type:* string

---

##### `TimeOfLastRefreshPoint`<sup>Required</sup> <a name="TimeOfLastRefreshPoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastRefreshPoint"></a>

```csharp
public string TimeOfLastRefreshPoint { get; }
```

- *Type:* string

---

##### `TimeOfLastSwitchover`<sup>Required</sup> <a name="TimeOfLastSwitchover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfLastSwitchover"></a>

```csharp
public string TimeOfLastSwitchover { get; }
```

- *Type:* string

---

##### `TimeOfNextRefresh`<sup>Required</sup> <a name="TimeOfNextRefresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeOfNextRefresh"></a>

```csharp
public string TimeOfNextRefresh { get; }
```

- *Type:* string

---

##### `TimeReclamationOfFreeAutonomousDatabase`<sup>Required</sup> <a name="TimeReclamationOfFreeAutonomousDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase"></a>

```csharp
public string TimeReclamationOfFreeAutonomousDatabase { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `TimeUndeleted`<sup>Required</sup> <a name="TimeUndeleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeUndeleted"></a>

```csharp
public string TimeUndeleted { get; }
```

- *Type:* string

---

##### `TimeUntilReconnectCloneEnabled`<sup>Required</sup> <a name="TimeUntilReconnectCloneEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.timeUntilReconnectCloneEnabled"></a>

```csharp
public string TimeUntilReconnectCloneEnabled { get; }
```

- *Type:* string

---

##### `TotalBackupStorageSizeInGbs`<sup>Required</sup> <a name="TotalBackupStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.totalBackupStorageSizeInGbs"></a>

```csharp
public double TotalBackupStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `UsedDataStorageSizeInGbs`<sup>Required</sup> <a name="UsedDataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.usedDataStorageSizeInGbs"></a>

```csharp
public double UsedDataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `UsedDataStorageSizeInTbs`<sup>Required</sup> <a name="UsedDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.usedDataStorageSizeInTbs"></a>

```csharp
public double UsedDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `UseLatestAvailableBackupTimeStamp`<sup>Required</sup> <a name="UseLatestAvailableBackupTimeStamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStamp"></a>

```csharp
public IResolvable UseLatestAvailableBackupTimeStamp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `WhitelistedIps`<sup>Required</sup> <a name="WhitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.whitelistedIps"></a>

```csharp
public string[] WhitelistedIps { get; }
```

- *Type:* string[]

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput"></a>

```csharp
public string AutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseApexDetails <a name="DataOciDatabaseAutonomousDatabaseApexDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseApexDetails {

};
```


### DataOciDatabaseAutonomousDatabaseBackupConfig <a name="DataOciDatabaseAutonomousDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseBackupConfig {

};
```


### DataOciDatabaseAutonomousDatabaseConfig <a name="DataOciDatabaseAutonomousDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousDatabaseId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database#autonomous_database_id DataOciDatabaseAutonomousDatabase#autonomous_database_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database#autonomous_database_id DataOciDatabaseAutonomousDatabase#autonomous_database_id}.

---

### DataOciDatabaseAutonomousDatabaseConnectionStrings <a name="DataOciDatabaseAutonomousDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseConnectionStrings {

};
```


### DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles <a name="DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles {

};
```


### DataOciDatabaseAutonomousDatabaseConnectionUrls <a name="DataOciDatabaseAutonomousDatabaseConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseConnectionUrls {

};
```


### DataOciDatabaseAutonomousDatabaseCustomerContacts <a name="DataOciDatabaseAutonomousDatabaseCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseCustomerContacts {

};
```


### DataOciDatabaseAutonomousDatabaseDbToolsDetails <a name="DataOciDatabaseAutonomousDatabaseDbToolsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseDbToolsDetails {

};
```


### DataOciDatabaseAutonomousDatabaseEncryptionKey <a name="DataOciDatabaseAutonomousDatabaseEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseEncryptionKey {

};
```


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry {

};
```


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey {

};
```


### DataOciDatabaseAutonomousDatabaseKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabaseKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseKeyHistoryEntry {

};
```


### DataOciDatabaseAutonomousDatabaseLocalStandbyDb <a name="DataOciDatabaseAutonomousDatabaseLocalStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseLocalStandbyDb {

};
```


### DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule <a name="DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule {

};
```


### DataOciDatabaseAutonomousDatabasePublicConnectionUrls <a name="DataOciDatabaseAutonomousDatabasePublicConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasePublicConnectionUrls {

};
```


### DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration <a name="DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration {

};
```


### DataOciDatabaseAutonomousDatabaseResourcePoolSummary <a name="DataOciDatabaseAutonomousDatabaseResourcePoolSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseResourcePoolSummary {

};
```


### DataOciDatabaseAutonomousDatabaseScheduledOperations <a name="DataOciDatabaseAutonomousDatabaseScheduledOperations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseScheduledOperations {

};
```


### DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek <a name="DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek {

};
```


### DataOciDatabaseAutonomousDatabaseStandbyDb <a name="DataOciDatabaseAutonomousDatabaseStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseStandbyDb {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseApexDetailsList <a name="DataOciDatabaseAutonomousDatabaseApexDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseApexDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.apexVersion">ApexVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.ordsVersion">OrdsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetails">DataOciDatabaseAutonomousDatabaseApexDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApexVersion`<sup>Required</sup> <a name="ApexVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.apexVersion"></a>

```csharp
public string ApexVersion { get; }
```

- *Type:* string

---

##### `OrdsVersion`<sup>Required</sup> <a name="OrdsVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.ordsVersion"></a>

```csharp
public string OrdsVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseApexDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseApexDetails">DataOciDatabaseAutonomousDatabaseApexDetails</a>

---


### DataOciDatabaseAutonomousDatabaseBackupConfigList <a name="DataOciDatabaseAutonomousDatabaseBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseBackupConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference <a name="DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupBucketName">ManualBackupBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupType">ManualBackupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfig">DataOciDatabaseAutonomousDatabaseBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManualBackupBucketName`<sup>Required</sup> <a name="ManualBackupBucketName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupBucketName"></a>

```csharp
public string ManualBackupBucketName { get; }
```

- *Type:* string

---

##### `ManualBackupType`<sup>Required</sup> <a name="ManualBackupType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupType"></a>

```csharp
public string ManualBackupType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseBackupConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseBackupConfig">DataOciDatabaseAutonomousDatabaseBackupConfig</a>

---


### DataOciDatabaseAutonomousDatabaseConnectionStringsList <a name="DataOciDatabaseAutonomousDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference <a name="DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.dedicated">Dedicated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.high">High</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.low">Low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.medium">Medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.profiles">Profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStrings">DataOciDatabaseAutonomousDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public StringMap AllConnectionStrings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Dedicated`<sup>Required</sup> <a name="Dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.dedicated"></a>

```csharp
public string Dedicated { get; }
```

- *Type:* string

---

##### `High`<sup>Required</sup> <a name="High" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.high"></a>

```csharp
public string High { get; }
```

- *Type:* string

---

##### `Low`<sup>Required</sup> <a name="Low" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.low"></a>

```csharp
public string Low { get; }
```

- *Type:* string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.medium"></a>

```csharp
public string Medium { get; }
```

- *Type:* string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.profiles"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList Profiles { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStrings">DataOciDatabaseAutonomousDatabaseConnectionStrings</a>

---


### DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList <a name="DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference <a name="DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.consumerGroup">ConsumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.hostFormat">HostFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.isRegional">IsRegional</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.sessionMode">SessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.syntaxFormat">SyntaxFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.tlsAuthentication">TlsAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles">DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```csharp
public string ConsumerGroup { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `HostFormat`<sup>Required</sup> <a name="HostFormat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```csharp
public string HostFormat { get; }
```

- *Type:* string

---

##### `IsRegional`<sup>Required</sup> <a name="IsRegional" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.isRegional"></a>

```csharp
public IResolvable IsRegional { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SessionMode`<sup>Required</sup> <a name="SessionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```csharp
public string SessionMode { get; }
```

- *Type:* string

---

##### `SyntaxFormat`<sup>Required</sup> <a name="SyntaxFormat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```csharp
public string SyntaxFormat { get; }
```

- *Type:* string

---

##### `TlsAuthentication`<sup>Required</sup> <a name="TlsAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```csharp
public string TlsAuthentication { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles">DataOciDatabaseAutonomousDatabaseConnectionStringsProfiles</a>

---


### DataOciDatabaseAutonomousDatabaseConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabaseConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseConnectionUrlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.apexUrl">ApexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.databaseTransformsUrl">DatabaseTransformsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.graphStudioUrl">GraphStudioUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningNotebookUrl">MachineLearningNotebookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">MachineLearningUserManagementUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.mongoDbUrl">MongoDbUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.ordsUrl">OrdsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.sqlDevWebUrl">SqlDevWebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrls">DataOciDatabaseAutonomousDatabaseConnectionUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApexUrl`<sup>Required</sup> <a name="ApexUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.apexUrl"></a>

```csharp
public string ApexUrl { get; }
```

- *Type:* string

---

##### `DatabaseTransformsUrl`<sup>Required</sup> <a name="DatabaseTransformsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```csharp
public string DatabaseTransformsUrl { get; }
```

- *Type:* string

---

##### `GraphStudioUrl`<sup>Required</sup> <a name="GraphStudioUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```csharp
public string GraphStudioUrl { get; }
```

- *Type:* string

---

##### `MachineLearningNotebookUrl`<sup>Required</sup> <a name="MachineLearningNotebookUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```csharp
public string MachineLearningNotebookUrl { get; }
```

- *Type:* string

---

##### `MachineLearningUserManagementUrl`<sup>Required</sup> <a name="MachineLearningUserManagementUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```csharp
public string MachineLearningUserManagementUrl { get; }
```

- *Type:* string

---

##### `MongoDbUrl`<sup>Required</sup> <a name="MongoDbUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```csharp
public string MongoDbUrl { get; }
```

- *Type:* string

---

##### `OrdsUrl`<sup>Required</sup> <a name="OrdsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.ordsUrl"></a>

```csharp
public string OrdsUrl { get; }
```

- *Type:* string

---

##### `SqlDevWebUrl`<sup>Required</sup> <a name="SqlDevWebUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```csharp
public string SqlDevWebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseConnectionUrls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseConnectionUrls">DataOciDatabaseAutonomousDatabaseConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabaseCustomerContactsList <a name="DataOciDatabaseAutonomousDatabaseCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseCustomerContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference <a name="DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContacts">DataOciDatabaseAutonomousDatabaseCustomerContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContactsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseCustomerContacts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseCustomerContacts">DataOciDatabaseAutonomousDatabaseCustomerContacts</a>

---


### DataOciDatabaseAutonomousDatabaseDbToolsDetailsList <a name="DataOciDatabaseAutonomousDatabaseDbToolsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseDbToolsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">MaxIdleTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetails">DataOciDatabaseAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxIdleTimeInMinutes`<sup>Required</sup> <a name="MaxIdleTimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```csharp
public double MaxIdleTimeInMinutes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseDbToolsDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseDbToolsDetails">DataOciDatabaseAutonomousDatabaseDbToolsDetails</a>

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole">ArnRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider">AutonomousDatabaseProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName">CertificateDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName">DirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey">OkvKmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri">OkvUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri">ServiceEndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri">VaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnRole`<sup>Required</sup> <a name="ArnRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole"></a>

```csharp
public string ArnRole { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseProvider`<sup>Required</sup> <a name="AutonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```csharp
public string AutonomousDatabaseProvider { get; }
```

- *Type:* string

---

##### `CertificateDirectoryName`<sup>Required</sup> <a name="CertificateDirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```csharp
public string CertificateDirectoryName { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName"></a>

```csharp
public string DirectoryName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `OkvKmsKey`<sup>Required</sup> <a name="OkvKmsKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey"></a>

```csharp
public string OkvKmsKey { get; }
```

- *Type:* string

---

##### `OkvUri`<sup>Required</sup> <a name="OkvUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri"></a>

```csharp
public string OkvUri { get; }
```

- *Type:* string

---

##### `ServiceEndpointUri`<sup>Required</sup> <a name="ServiceEndpointUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```csharp
public string ServiceEndpointUri { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `VaultUri`<sup>Required</sup> <a name="VaultUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri"></a>

```csharp
public string VaultUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.timeActivated">TimeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.encryptionKey"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList EncryptionKey { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList</a>

---

##### `TimeActivated`<sup>Required</sup> <a name="TimeActivated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.timeActivated"></a>

```csharp
public string TimeActivated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabaseEncryptionKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseEncryptionKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRole">ArnRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProvider">AutonomousDatabaseProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryName">CertificateDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryName">DirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKey">OkvKmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUri">OkvUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUri">ServiceEndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUri">VaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKey">DataOciDatabaseAutonomousDatabaseEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnRole`<sup>Required</sup> <a name="ArnRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRole"></a>

```csharp
public string ArnRole { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseProvider`<sup>Required</sup> <a name="AutonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```csharp
public string AutonomousDatabaseProvider { get; }
```

- *Type:* string

---

##### `CertificateDirectoryName`<sup>Required</sup> <a name="CertificateDirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```csharp
public string CertificateDirectoryName { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryName"></a>

```csharp
public string DirectoryName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `OkvKmsKey`<sup>Required</sup> <a name="OkvKmsKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKey"></a>

```csharp
public string OkvKmsKey { get; }
```

- *Type:* string

---

##### `OkvUri`<sup>Required</sup> <a name="OkvUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUri"></a>

```csharp
public string OkvUri { get; }
```

- *Type:* string

---

##### `ServiceEndpointUri`<sup>Required</sup> <a name="ServiceEndpointUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```csharp
public string ServiceEndpointUri { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `VaultUri`<sup>Required</sup> <a name="VaultUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUri"></a>

```csharp
public string VaultUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseEncryptionKey">DataOciDatabaseAutonomousDatabaseEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.timeActivated">TimeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntry">DataOciDatabaseAutonomousDatabaseKeyHistoryEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `TimeActivated`<sup>Required</sup> <a name="TimeActivated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.timeActivated"></a>

```csharp
public string TimeActivated { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseKeyHistoryEntry InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseKeyHistoryEntry">DataOciDatabaseAutonomousDatabaseKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabaseLocalStandbyDbList <a name="DataOciDatabaseAutonomousDatabaseLocalStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseLocalStandbyDbList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lagTimeInSeconds">LagTimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged">TimeDataGuardRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">TimeDisasterRecoveryRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDb">DataOciDatabaseAutonomousDatabaseLocalStandbyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `LagTimeInSeconds`<sup>Required</sup> <a name="LagTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```csharp
public double LagTimeInSeconds { get; }
```

- *Type:* double

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeDataGuardRoleChanged`<sup>Required</sup> <a name="TimeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```csharp
public string TimeDataGuardRoleChanged { get; }
```

- *Type:* string

---

##### `TimeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="TimeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```csharp
public string TimeDisasterRecoveryRoleChanged { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseLocalStandbyDb InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLocalStandbyDb">DataOciDatabaseAutonomousDatabaseLocalStandbyDb</a>

---


### DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList <a name="DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">IsDisabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">RepeatCadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">TimeOfBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule">DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```csharp
public IResolvable IsDisabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RepeatCadence`<sup>Required</sup> <a name="RepeatCadence" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```csharp
public string RepeatCadence { get; }
```

- *Type:* string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `TimeOfBackup`<sup>Required</sup> <a name="TimeOfBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```csharp
public string TimeOfBackup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule">DataOciDatabaseAutonomousDatabaseLongTermBackupSchedule</a>

---


### DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.apexUrl">ApexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.databaseTransformsUrl">DatabaseTransformsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.graphStudioUrl">GraphStudioUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl">MachineLearningNotebookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">MachineLearningUserManagementUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.mongoDbUrl">MongoDbUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.ordsUrl">OrdsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.sqlDevWebUrl">SqlDevWebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrls">DataOciDatabaseAutonomousDatabasePublicConnectionUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApexUrl`<sup>Required</sup> <a name="ApexUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.apexUrl"></a>

```csharp
public string ApexUrl { get; }
```

- *Type:* string

---

##### `DatabaseTransformsUrl`<sup>Required</sup> <a name="DatabaseTransformsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```csharp
public string DatabaseTransformsUrl { get; }
```

- *Type:* string

---

##### `GraphStudioUrl`<sup>Required</sup> <a name="GraphStudioUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```csharp
public string GraphStudioUrl { get; }
```

- *Type:* string

---

##### `MachineLearningNotebookUrl`<sup>Required</sup> <a name="MachineLearningNotebookUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```csharp
public string MachineLearningNotebookUrl { get; }
```

- *Type:* string

---

##### `MachineLearningUserManagementUrl`<sup>Required</sup> <a name="MachineLearningUserManagementUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```csharp
public string MachineLearningUserManagementUrl { get; }
```

- *Type:* string

---

##### `MongoDbUrl`<sup>Required</sup> <a name="MongoDbUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```csharp
public string MongoDbUrl { get; }
```

- *Type:* string

---

##### `OrdsUrl`<sup>Required</sup> <a name="OrdsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.ordsUrl"></a>

```csharp
public string OrdsUrl { get; }
```

- *Type:* string

---

##### `SqlDevWebUrl`<sup>Required</sup> <a name="SqlDevWebUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```csharp
public string SqlDevWebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasePublicConnectionUrls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabasePublicConnectionUrls">DataOciDatabaseAutonomousDatabasePublicConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList <a name="DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference <a name="DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType">DisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups">IsReplicateAutomaticBackups</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby">IsSnapshotStandby</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill">TimeSnapshotStandbyEnabledTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisasterRecoveryType`<sup>Required</sup> <a name="DisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType"></a>

```csharp
public string DisasterRecoveryType { get; }
```

- *Type:* string

---

##### `IsReplicateAutomaticBackups`<sup>Required</sup> <a name="IsReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups"></a>

```csharp
public IResolvable IsReplicateAutomaticBackups { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSnapshotStandby`<sup>Required</sup> <a name="IsSnapshotStandby" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby"></a>

```csharp
public IResolvable IsSnapshotStandby { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TimeSnapshotStandbyEnabledTill`<sup>Required</sup> <a name="TimeSnapshotStandbyEnabledTill" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill"></a>

```csharp
public string TimeSnapshotStandbyEnabledTill { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration</a>

---


### DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList <a name="DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference <a name="DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">IsDisabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">PoolSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummary">DataOciDatabaseAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```csharp
public IResolvable IsDisabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```csharp
public double PoolSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseResourcePoolSummary InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseResourcePoolSummary">DataOciDatabaseAutonomousDatabaseResourcePoolSummary</a>

---


### DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList <a name="DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference <a name="DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

---


### DataOciDatabaseAutonomousDatabaseScheduledOperationsList <a name="DataOciDatabaseAutonomousDatabaseScheduledOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseScheduledOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference <a name="DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">ScheduledStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">ScheduledStopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperations">DataOciDatabaseAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList DayOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList</a>

---

##### `ScheduledStartTime`<sup>Required</sup> <a name="ScheduledStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```csharp
public string ScheduledStartTime { get; }
```

- *Type:* string

---

##### `ScheduledStopTime`<sup>Required</sup> <a name="ScheduledStopTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```csharp
public string ScheduledStopTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseScheduledOperations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseScheduledOperations">DataOciDatabaseAutonomousDatabaseScheduledOperations</a>

---


### DataOciDatabaseAutonomousDatabaseStandbyDbList <a name="DataOciDatabaseAutonomousDatabaseStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseStandbyDbList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.lagTimeInSeconds">LagTimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDataGuardRoleChanged">TimeDataGuardRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">TimeDisasterRecoveryRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDb">DataOciDatabaseAutonomousDatabaseStandbyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `LagTimeInSeconds`<sup>Required</sup> <a name="LagTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```csharp
public double LagTimeInSeconds { get; }
```

- *Type:* double

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeDataGuardRoleChanged`<sup>Required</sup> <a name="TimeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```csharp
public string TimeDataGuardRoleChanged { get; }
```

- *Type:* string

---

##### `TimeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="TimeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```csharp
public string TimeDisasterRecoveryRoleChanged { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDbOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseStandbyDb InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabase.DataOciDatabaseAutonomousDatabaseStandbyDb">DataOciDatabaseAutonomousDatabaseStandbyDb</a>

---



