# `dataOciDatabaseCloudAutonomousVmClusters` Submodule <a name="`dataOciDatabaseCloudAutonomousVmClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudAutonomousVmClusters <a name="DataOciDatabaseCloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters oci_database_cloud_autonomous_vm_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClusters(Construct Scope, string Id, DataOciDatabaseCloudAutonomousVmClustersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig">DataOciDatabaseCloudAutonomousVmClustersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig">DataOciDatabaseCloudAutonomousVmClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetCloudExadataInfrastructureId">ResetCloudExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetCloudExadataInfrastructureId` <a name="ResetCloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetCloudExadataInfrastructureId"></a>

```csharp
private void ResetCloudExadataInfrastructureId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseCloudAutonomousVmClusters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseCloudAutonomousVmClusters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseCloudAutonomousVmClusters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseCloudAutonomousVmClusters.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusters resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseCloudAutonomousVmClusters to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseCloudAutonomousVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudAutonomousVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudAutonomousVmClusters">CloudAutonomousVmClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList">DataOciDatabaseCloudAutonomousVmClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureIdInput">CloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CloudAutonomousVmClusters`<sup>Required</sup> <a name="CloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudAutonomousVmClusters"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList CloudAutonomousVmClusters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filter"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList">DataOciDatabaseCloudAutonomousVmClustersFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureIdInput"></a>

```csharp
public string CloudExadataInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters {

};
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow {

};
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek {

};
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails {

};
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek {

};
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths {

};
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths {

};
```


### DataOciDatabaseCloudAutonomousVmClustersConfig <a name="DataOciDatabaseCloudAutonomousVmClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AvailabilityDomain = null,
    string CloudExadataInfrastructureId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#compartment_id DataOciDatabaseCloudAutonomousVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#availability_domain DataOciDatabaseCloudAutonomousVmClusters#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudAutonomousVmClusters#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#display_name DataOciDatabaseCloudAutonomousVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#id DataOciDatabaseCloudAutonomousVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#state DataOciDatabaseCloudAutonomousVmClusters#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#compartment_id DataOciDatabaseCloudAutonomousVmClusters#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#availability_domain DataOciDatabaseCloudAutonomousVmClusters#availability_domain}.

---

##### `CloudExadataInfrastructureId`<sup>Optional</sup> <a name="CloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudAutonomousVmClusters#cloud_exadata_infrastructure_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#display_name DataOciDatabaseCloudAutonomousVmClusters#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#filter DataOciDatabaseCloudAutonomousVmClusters#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#id DataOciDatabaseCloudAutonomousVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#state DataOciDatabaseCloudAutonomousVmClusters#state}.

---

### DataOciDatabaseCloudAutonomousVmClustersFilter <a name="DataOciDatabaseCloudAutonomousVmClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#name DataOciDatabaseCloudAutonomousVmClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#values DataOciDatabaseCloudAutonomousVmClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#regex DataOciDatabaseCloudAutonomousVmClusters#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#name DataOciDatabaseCloudAutonomousVmClusters#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#values DataOciDatabaseCloudAutonomousVmClusters#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#regex DataOciDatabaseCloudAutonomousVmClusters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.get"></a>

```csharp
private DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.get"></a>

```csharp
private DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```csharp
private DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.get"></a>

```csharp
private DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.get"></a>

```csharp
private DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.skipRu">SkipRu</a></code> | <code>HashiCorp.Cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public IResolvable IsMonthlyPatchingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.months"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```csharp
public BooleanList SkipRu { get; }
```

- *Type:* HashiCorp.Cdktf.BooleanList

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.get"></a>

```csharp
private DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.get"></a>

```csharp
private DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.skipRu">SkipRu</a></code> | <code>HashiCorp.Cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public IResolvable IsMonthlyPatchingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.months"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.skipRu"></a>

```csharp
public BooleanList SkipRu { get; }
```

- *Type:* HashiCorp.Cdktf.BooleanList

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStoragePercentage">AutonomousDataStoragePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStorageSizeInTbs">AutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableAutonomousDataStorageSizeInTbs">AvailableAutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableContainerDatabases">AvailableContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableCpus">AvailableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.clusterTimeZone">ClusterTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCountPerNode">CpuCoreCountPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuPercentage">CpuPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbServers">DbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.exadataStorageInTbsLowestScaledValue">ExadataStorageInTbsLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.isMtlsEnabledVmCluster">IsMtlsEnabledVmCluster</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastMaintenanceRunId">LastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastUpdateHistoryEntryId">LastUpdateHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindowDetails">MaintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maxAcdsLowestScaledValue">MaxAcdsLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nonProvisionableAutonomousContainerDatabases">NonProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpusLowestScaledValue">OcpusLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionableAutonomousContainerDatabases">ProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedAutonomousContainerDatabases">ProvisionedAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortNonTls">ScanListenerPortNonTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortTls">ScanListenerPortTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.securityAttributes">SecurityAttributes</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeDatabaseSslCertificateExpires">TimeDatabaseSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeOrdsCertificateExpires">TimeOrdsCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalAutonomousDataStorageInTbs">TotalAutonomousDataStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalContainerDatabases">TotalContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalCpus">TotalCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutonomousDataStoragePercentage`<sup>Required</sup> <a name="AutonomousDataStoragePercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStoragePercentage"></a>

```csharp
public double AutonomousDataStoragePercentage { get; }
```

- *Type:* double

---

##### `AutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStorageSizeInTbs"></a>

```csharp
public double AutonomousDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `AvailableAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AvailableAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableAutonomousDataStorageSizeInTbs"></a>

```csharp
public double AvailableAutonomousDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AvailableContainerDatabases`<sup>Required</sup> <a name="AvailableContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableContainerDatabases"></a>

```csharp
public double AvailableContainerDatabases { get; }
```

- *Type:* double

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableCpus"></a>

```csharp
public double AvailableCpus { get; }
```

- *Type:* double

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `ClusterTimeZone`<sup>Required</sup> <a name="ClusterTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.clusterTimeZone"></a>

```csharp
public string ClusterTimeZone { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CpuCoreCountPerNode`<sup>Required</sup> <a name="CpuCoreCountPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCountPerNode"></a>

```csharp
public double CpuCoreCountPerNode { get; }
```

- *Type:* double

---

##### `CpuPercentage`<sup>Required</sup> <a name="CpuPercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuPercentage"></a>

```csharp
public double CpuPercentage { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbServers"></a>

```csharp
public string[] DbServers { get; }
```

- *Type:* string[]

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `ExadataStorageInTbsLowestScaledValue`<sup>Required</sup> <a name="ExadataStorageInTbsLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.exadataStorageInTbsLowestScaledValue"></a>

```csharp
public double ExadataStorageInTbsLowestScaledValue { get; }
```

- *Type:* double

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMtlsEnabledVmCluster`<sup>Required</sup> <a name="IsMtlsEnabledVmCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.isMtlsEnabledVmCluster"></a>

```csharp
public IResolvable IsMtlsEnabledVmCluster { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastMaintenanceRunId`<sup>Required</sup> <a name="LastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastMaintenanceRunId"></a>

```csharp
public string LastMaintenanceRunId { get; }
```

- *Type:* string

---

##### `LastUpdateHistoryEntryId`<sup>Required</sup> <a name="LastUpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastUpdateHistoryEntryId"></a>

```csharp
public string LastUpdateHistoryEntryId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindow"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList</a>

---

##### `MaintenanceWindowDetails`<sup>Required</sup> <a name="MaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindowDetails"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList MaintenanceWindowDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList</a>

---

##### `MaxAcdsLowestScaledValue`<sup>Required</sup> <a name="MaxAcdsLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maxAcdsLowestScaledValue"></a>

```csharp
public double MaxAcdsLowestScaledValue { get; }
```

- *Type:* double

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memoryPerOracleComputeUnitInGbs"></a>

```csharp
public double MemoryPerOracleComputeUnitInGbs { get; }
```

- *Type:* double

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nextMaintenanceRunId"></a>

```csharp
public string NextMaintenanceRunId { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="NonProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nonProvisionableAutonomousContainerDatabases"></a>

```csharp
public double NonProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpuCount"></a>

```csharp
public double OcpuCount { get; }
```

- *Type:* double

---

##### `OcpusLowestScaledValue`<sup>Required</sup> <a name="OcpusLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpusLowestScaledValue"></a>

```csharp
public double OcpusLowestScaledValue { get; }
```

- *Type:* double

---

##### `ProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionableAutonomousContainerDatabases"></a>

```csharp
public double ProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionedAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedAutonomousContainerDatabases"></a>

```csharp
public double ProvisionedAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `ScanListenerPortNonTls`<sup>Required</sup> <a name="ScanListenerPortNonTls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortNonTls"></a>

```csharp
public double ScanListenerPortNonTls { get; }
```

- *Type:* double

---

##### `ScanListenerPortTls`<sup>Required</sup> <a name="ScanListenerPortTls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortTls"></a>

```csharp
public double ScanListenerPortTls { get; }
```

- *Type:* double

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.securityAttributes"></a>

```csharp
public StringMap SecurityAttributes { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeDatabaseSslCertificateExpires`<sup>Required</sup> <a name="TimeDatabaseSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeDatabaseSslCertificateExpires"></a>

```csharp
public string TimeDatabaseSslCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeOrdsCertificateExpires`<sup>Required</sup> <a name="TimeOrdsCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeOrdsCertificateExpires"></a>

```csharp
public string TimeOrdsCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalAutonomousDataStorageInTbs`<sup>Required</sup> <a name="TotalAutonomousDataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalAutonomousDataStorageInTbs"></a>

```csharp
public double TotalAutonomousDataStorageInTbs { get; }
```

- *Type:* double

---

##### `TotalContainerDatabases`<sup>Required</sup> <a name="TotalContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalContainerDatabases"></a>

```csharp
public double TotalContainerDatabases { get; }
```

- *Type:* double

---

##### `TotalCpus`<sup>Required</sup> <a name="TotalCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalCpus"></a>

```csharp
public double TotalCpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters</a>

---


### DataOciDatabaseCloudAutonomousVmClustersFilterList <a name="DataOciDatabaseCloudAutonomousVmClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.get"></a>

```csharp
private DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



