# `dataOciDatabaseAutonomousVmCluster` Submodule <a name="`dataOciDatabaseAutonomousVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousVmCluster <a name="DataOciDatabaseAutonomousVmCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster oci_database_autonomous_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmCluster(Construct Scope, string Id, DataOciDatabaseAutonomousVmClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig">DataOciDatabaseAutonomousVmClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig">DataOciDatabaseAutonomousVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmCluster.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousVmCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousVmCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.autonomousDataStoragePercentage">AutonomousDataStoragePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.autonomousDataStorageSizeInTbs">AutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTbs">AvailableAutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.availableContainerDatabases">AvailableContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.availableCpus">AvailableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.availableDataStorageSizeInTbs">AvailableDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.cpuCoreCountPerNode">CpuCoreCountPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.cpuPercentage">CpuPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.cpusEnabled">CpusEnabled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.cpusLowestScaledValue">CpusLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.dbServers">DbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.exadataStorageInTbsLowestScaledValue">ExadataStorageInTbsLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.isLocalBackupEnabled">IsLocalBackupEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.isMtlsEnabled">IsMtlsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.lastMaintenanceRunId">LastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.maintenanceWindowDetails">MaintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.maxAcdsLowestScaledValue">MaxAcdsLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases">NonProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.ocpusEnabled">OcpusEnabled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.provisionableAutonomousContainerDatabases">ProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.provisionedAutonomousContainerDatabases">ProvisionedAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.scanListenerPortNonTls">ScanListenerPortNonTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.scanListenerPortTls">ScanListenerPortTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.timeDatabaseSslCertificateExpires">TimeDatabaseSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.timeOrdsCertificateExpires">TimeOrdsCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.totalAutonomousDataStorageInTbs">TotalAutonomousDataStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.totalContainerDatabases">TotalContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.vmClusterNetworkId">VmClusterNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.autonomousVmClusterIdInput">AutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousDataStoragePercentage`<sup>Required</sup> <a name="AutonomousDataStoragePercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.autonomousDataStoragePercentage"></a>

```csharp
public double AutonomousDataStoragePercentage { get; }
```

- *Type:* double

---

##### `AutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.autonomousDataStorageSizeInTbs"></a>

```csharp
public double AutonomousDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AvailableAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AvailableAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTbs"></a>

```csharp
public double AvailableAutonomousDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AvailableContainerDatabases`<sup>Required</sup> <a name="AvailableContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.availableContainerDatabases"></a>

```csharp
public double AvailableContainerDatabases { get; }
```

- *Type:* double

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.availableCpus"></a>

```csharp
public double AvailableCpus { get; }
```

- *Type:* double

---

##### `AvailableDataStorageSizeInTbs`<sup>Required</sup> <a name="AvailableDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.availableDataStorageSizeInTbs"></a>

```csharp
public double AvailableDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `CpuCoreCountPerNode`<sup>Required</sup> <a name="CpuCoreCountPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.cpuCoreCountPerNode"></a>

```csharp
public double CpuCoreCountPerNode { get; }
```

- *Type:* double

---

##### `CpuPercentage`<sup>Required</sup> <a name="CpuPercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.cpuPercentage"></a>

```csharp
public double CpuPercentage { get; }
```

- *Type:* double

---

##### `CpusEnabled`<sup>Required</sup> <a name="CpusEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.cpusEnabled"></a>

```csharp
public double CpusEnabled { get; }
```

- *Type:* double

---

##### `CpusLowestScaledValue`<sup>Required</sup> <a name="CpusLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.cpusLowestScaledValue"></a>

```csharp
public double CpusLowestScaledValue { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.dbServers"></a>

```csharp
public string[] DbServers { get; }
```

- *Type:* string[]

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.exadataInfrastructureId"></a>

```csharp
public string ExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `ExadataStorageInTbsLowestScaledValue`<sup>Required</sup> <a name="ExadataStorageInTbsLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.exadataStorageInTbsLowestScaledValue"></a>

```csharp
public double ExadataStorageInTbsLowestScaledValue { get; }
```

- *Type:* double

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLocalBackupEnabled`<sup>Required</sup> <a name="IsLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.isLocalBackupEnabled"></a>

```csharp
public IResolvable IsLocalBackupEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMtlsEnabled`<sup>Required</sup> <a name="IsMtlsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.isMtlsEnabled"></a>

```csharp
public IResolvable IsMtlsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastMaintenanceRunId`<sup>Required</sup> <a name="LastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.lastMaintenanceRunId"></a>

```csharp
public string LastMaintenanceRunId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.maintenanceWindow"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowList</a>

---

##### `MaintenanceWindowDetails`<sup>Required</sup> <a name="MaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.maintenanceWindowDetails"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList MaintenanceWindowDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList</a>

---

##### `MaxAcdsLowestScaledValue`<sup>Required</sup> <a name="MaxAcdsLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.maxAcdsLowestScaledValue"></a>

```csharp
public double MaxAcdsLowestScaledValue { get; }
```

- *Type:* double

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbs"></a>

```csharp
public double MemoryPerOracleComputeUnitInGbs { get; }
```

- *Type:* double

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.nextMaintenanceRunId"></a>

```csharp
public string NextMaintenanceRunId { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="NonProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases"></a>

```csharp
public double NonProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `OcpusEnabled`<sup>Required</sup> <a name="OcpusEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.ocpusEnabled"></a>

```csharp
public double OcpusEnabled { get; }
```

- *Type:* double

---

##### `ProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.provisionableAutonomousContainerDatabases"></a>

```csharp
public double ProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionedAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.provisionedAutonomousContainerDatabases"></a>

```csharp
public double ProvisionedAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `ScanListenerPortNonTls`<sup>Required</sup> <a name="ScanListenerPortNonTls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.scanListenerPortNonTls"></a>

```csharp
public double ScanListenerPortNonTls { get; }
```

- *Type:* double

---

##### `ScanListenerPortTls`<sup>Required</sup> <a name="ScanListenerPortTls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.scanListenerPortTls"></a>

```csharp
public double ScanListenerPortTls { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeDatabaseSslCertificateExpires`<sup>Required</sup> <a name="TimeDatabaseSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.timeDatabaseSslCertificateExpires"></a>

```csharp
public string TimeDatabaseSslCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeOrdsCertificateExpires`<sup>Required</sup> <a name="TimeOrdsCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.timeOrdsCertificateExpires"></a>

```csharp
public string TimeOrdsCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `TotalAutonomousDataStorageInTbs`<sup>Required</sup> <a name="TotalAutonomousDataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.totalAutonomousDataStorageInTbs"></a>

```csharp
public double TotalAutonomousDataStorageInTbs { get; }
```

- *Type:* double

---

##### `TotalContainerDatabases`<sup>Required</sup> <a name="TotalContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.totalContainerDatabases"></a>

```csharp
public double TotalContainerDatabases { get; }
```

- *Type:* double

---

##### `VmClusterNetworkId`<sup>Required</sup> <a name="VmClusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.vmClusterNetworkId"></a>

```csharp
public string VmClusterNetworkId { get; }
```

- *Type:* string

---

##### `AutonomousVmClusterIdInput`<sup>Optional</sup> <a name="AutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.autonomousVmClusterIdInput"></a>

```csharp
public string AutonomousVmClusterIdInput { get; }
```

- *Type:* string

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.autonomousVmClusterId"></a>

```csharp
public string AutonomousVmClusterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousVmClusterConfig <a name="DataOciDatabaseAutonomousVmClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousVmClusterId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster#autonomous_vm_cluster_id DataOciDatabaseAutonomousVmCluster#autonomous_vm_cluster_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterConfig.property.autonomousVmClusterId"></a>

```csharp
public string AutonomousVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster#autonomous_vm_cluster_id DataOciDatabaseAutonomousVmCluster#autonomous_vm_cluster_id}.

---

### DataOciDatabaseAutonomousVmClusterMaintenanceWindow <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindow {

};
```


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek {

};
```


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetails <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetails {

};
```


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek {

};
```


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths {

};
```


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonths <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonths {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get"></a>

```csharp
private DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>

---


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```csharp
private DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek</a>

---


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.get"></a>

```csharp
private DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.get"></a>

```csharp
private DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths</a>

---


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.skipRu">SkipRu</a></code> | <code>HashiCorp.Cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetails">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public IResolvable IsMonthlyPatchingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.months"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```csharp
public BooleanList SkipRu { get; }
```

- *Type:* HashiCorp.Cdktf.BooleanList

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetails">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDetails</a>

---


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowList <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.get"></a>

```csharp
private DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.get"></a>

```csharp
private DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonths">DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonths InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonths">DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonths</a>

---


### DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference <a name="DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.skipRu">SkipRu</a></code> | <code>HashiCorp.Cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindow">DataOciDatabaseAutonomousVmClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public IResolvable IsMonthlyPatchingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.months"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList">DataOciDatabaseAutonomousVmClusterMaintenanceWindowMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.skipRu"></a>

```csharp
public BooleanList SkipRu { get; }
```

- *Type:* HashiCorp.Cdktf.BooleanList

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmCluster.DataOciDatabaseAutonomousVmClusterMaintenanceWindow">DataOciDatabaseAutonomousVmClusterMaintenanceWindow</a>

---



