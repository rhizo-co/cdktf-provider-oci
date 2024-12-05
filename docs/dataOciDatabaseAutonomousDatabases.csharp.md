# `dataOciDatabaseAutonomousDatabases` Submodule <a name="`dataOciDatabaseAutonomousDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabases <a name="DataOciDatabaseAutonomousDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases oci_database_autonomous_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabases(Construct Scope, string Id, DataOciDatabaseAutonomousDatabasesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig">DataOciDatabaseAutonomousDatabasesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig">DataOciDatabaseAutonomousDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetAutonomousContainerDatabaseId">ResetAutonomousContainerDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbVersion">ResetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbWorkload">ResetDbWorkload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetInfrastructureType">ResetInfrastructureType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsDataGuardEnabled">ResetIsDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsFreeTier">ResetIsFreeTier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsRefreshableClone">ResetIsRefreshableClone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsResourcePoolLeader">ResetIsResourcePoolLeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetLifecycleStateNotEqualTo">ResetLifecycleStateNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetResourcePoolLeaderId">ResetResourcePoolLeaderId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAutonomousContainerDatabaseId` <a name="ResetAutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetAutonomousContainerDatabaseId"></a>

```csharp
private void ResetAutonomousContainerDatabaseId()
```

##### `ResetDbVersion` <a name="ResetDbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbVersion"></a>

```csharp
private void ResetDbVersion()
```

##### `ResetDbWorkload` <a name="ResetDbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbWorkload"></a>

```csharp
private void ResetDbWorkload()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInfrastructureType` <a name="ResetInfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetInfrastructureType"></a>

```csharp
private void ResetInfrastructureType()
```

##### `ResetIsDataGuardEnabled` <a name="ResetIsDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsDataGuardEnabled"></a>

```csharp
private void ResetIsDataGuardEnabled()
```

##### `ResetIsFreeTier` <a name="ResetIsFreeTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsFreeTier"></a>

```csharp
private void ResetIsFreeTier()
```

##### `ResetIsRefreshableClone` <a name="ResetIsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsRefreshableClone"></a>

```csharp
private void ResetIsRefreshableClone()
```

##### `ResetIsResourcePoolLeader` <a name="ResetIsResourcePoolLeader" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsResourcePoolLeader"></a>

```csharp
private void ResetIsResourcePoolLeader()
```

##### `ResetLifecycleStateNotEqualTo` <a name="ResetLifecycleStateNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetLifecycleStateNotEqualTo"></a>

```csharp
private void ResetLifecycleStateNotEqualTo()
```

##### `ResetResourcePoolLeaderId` <a name="ResetResourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetResourcePoolLeaderId"></a>

```csharp
private void ResetResourcePoolLeaderId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabases.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabases.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabases.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabases.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabases resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabases to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousDatabases">AutonomousDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList">DataOciDatabaseAutonomousDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseIdInput">AutonomousContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkloadInput">DbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureTypeInput">InfrastructureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabledInput">IsDataGuardEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTierInput">IsFreeTierInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableCloneInput">IsRefreshableCloneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeaderInput">IsResourcePoolLeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualToInput">LifecycleStateNotEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderIdInput">ResourcePoolLeaderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureType">InfrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabled">IsDataGuardEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTier">IsFreeTier</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeader">IsResourcePoolLeader</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualTo">LifecycleStateNotEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousDatabases`<sup>Required</sup> <a name="AutonomousDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousDatabases"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList AutonomousDatabases { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filter"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList">DataOciDatabaseAutonomousDatabasesFilterList</a>

---

##### `AutonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseIdInput"></a>

```csharp
public string AutonomousContainerDatabaseIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `DbWorkloadInput`<sup>Optional</sup> <a name="DbWorkloadInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkloadInput"></a>

```csharp
public string DbWorkloadInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InfrastructureTypeInput`<sup>Optional</sup> <a name="InfrastructureTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureTypeInput"></a>

```csharp
public string InfrastructureTypeInput { get; }
```

- *Type:* string

---

##### `IsDataGuardEnabledInput`<sup>Optional</sup> <a name="IsDataGuardEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabledInput"></a>

```csharp
public object IsDataGuardEnabledInput { get; }
```

- *Type:* object

---

##### `IsFreeTierInput`<sup>Optional</sup> <a name="IsFreeTierInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTierInput"></a>

```csharp
public object IsFreeTierInput { get; }
```

- *Type:* object

---

##### `IsRefreshableCloneInput`<sup>Optional</sup> <a name="IsRefreshableCloneInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableCloneInput"></a>

```csharp
public object IsRefreshableCloneInput { get; }
```

- *Type:* object

---

##### `IsResourcePoolLeaderInput`<sup>Optional</sup> <a name="IsResourcePoolLeaderInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeaderInput"></a>

```csharp
public object IsResourcePoolLeaderInput { get; }
```

- *Type:* object

---

##### `LifecycleStateNotEqualToInput`<sup>Optional</sup> <a name="LifecycleStateNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualToInput"></a>

```csharp
public string LifecycleStateNotEqualToInput { get; }
```

- *Type:* string

---

##### `ResourcePoolLeaderIdInput`<sup>Optional</sup> <a name="ResourcePoolLeaderIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderIdInput"></a>

```csharp
public string ResourcePoolLeaderIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureType"></a>

```csharp
public string InfrastructureType { get; }
```

- *Type:* string

---

##### `IsDataGuardEnabled`<sup>Required</sup> <a name="IsDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabled"></a>

```csharp
public object IsDataGuardEnabled { get; }
```

- *Type:* object

---

##### `IsFreeTier`<sup>Required</sup> <a name="IsFreeTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTier"></a>

```csharp
public object IsFreeTier { get; }
```

- *Type:* object

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableClone"></a>

```csharp
public object IsRefreshableClone { get; }
```

- *Type:* object

---

##### `IsResourcePoolLeader`<sup>Required</sup> <a name="IsResourcePoolLeader" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeader"></a>

```csharp
public object IsResourcePoolLeader { get; }
```

- *Type:* object

---

##### `LifecycleStateNotEqualTo`<sup>Required</sup> <a name="LifecycleStateNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualTo"></a>

```csharp
public string LifecycleStateNotEqualTo { get; }
```

- *Type:* string

---

##### `ResourcePoolLeaderId`<sup>Required</sup> <a name="ResourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderId"></a>

```csharp
public string ResourcePoolLeaderId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabasesAutonomousDatabases <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabases {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek {

};
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb {

};
```


### DataOciDatabaseAutonomousDatabasesConfig <a name="DataOciDatabaseAutonomousDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AutonomousContainerDatabaseId = null,
    string DbVersion = null,
    string DbWorkload = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string InfrastructureType = null,
    object IsDataGuardEnabled = null,
    object IsFreeTier = null,
    object IsRefreshableClone = null,
    object IsResourcePoolLeader = null,
    string LifecycleStateNotEqualTo = null,
    string ResourcePoolLeaderId = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#compartment_id DataOciDatabaseAutonomousDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#autonomous_container_database_id DataOciDatabaseAutonomousDatabases#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbVersion">DbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_version DataOciDatabaseAutonomousDatabases#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_workload DataOciDatabaseAutonomousDatabases#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#display_name DataOciDatabaseAutonomousDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#id DataOciDatabaseAutonomousDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.infrastructureType">InfrastructureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#infrastructure_type DataOciDatabaseAutonomousDatabases#infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isDataGuardEnabled">IsDataGuardEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_data_guard_enabled DataOciDatabaseAutonomousDatabases#is_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isFreeTier">IsFreeTier</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_free_tier DataOciDatabaseAutonomousDatabases#is_free_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_refreshable_clone DataOciDatabaseAutonomousDatabases#is_refreshable_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isResourcePoolLeader">IsResourcePoolLeader</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_resource_pool_leader DataOciDatabaseAutonomousDatabases#is_resource_pool_leader}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycleStateNotEqualTo">LifecycleStateNotEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#lifecycle_state_not_equal_to DataOciDatabaseAutonomousDatabases#lifecycle_state_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#resource_pool_leader_id DataOciDatabaseAutonomousDatabases#resource_pool_leader_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#state DataOciDatabaseAutonomousDatabases#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#compartment_id DataOciDatabaseAutonomousDatabases#compartment_id}.

---

##### `AutonomousContainerDatabaseId`<sup>Optional</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#autonomous_container_database_id DataOciDatabaseAutonomousDatabases#autonomous_container_database_id}.

---

##### `DbVersion`<sup>Optional</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_version DataOciDatabaseAutonomousDatabases#db_version}.

---

##### `DbWorkload`<sup>Optional</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_workload DataOciDatabaseAutonomousDatabases#db_workload}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#display_name DataOciDatabaseAutonomousDatabases#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#filter DataOciDatabaseAutonomousDatabases#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#id DataOciDatabaseAutonomousDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InfrastructureType`<sup>Optional</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.infrastructureType"></a>

```csharp
public string InfrastructureType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#infrastructure_type DataOciDatabaseAutonomousDatabases#infrastructure_type}.

---

##### `IsDataGuardEnabled`<sup>Optional</sup> <a name="IsDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isDataGuardEnabled"></a>

```csharp
public object IsDataGuardEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_data_guard_enabled DataOciDatabaseAutonomousDatabases#is_data_guard_enabled}.

---

##### `IsFreeTier`<sup>Optional</sup> <a name="IsFreeTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isFreeTier"></a>

```csharp
public object IsFreeTier { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_free_tier DataOciDatabaseAutonomousDatabases#is_free_tier}.

---

##### `IsRefreshableClone`<sup>Optional</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isRefreshableClone"></a>

```csharp
public object IsRefreshableClone { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_refreshable_clone DataOciDatabaseAutonomousDatabases#is_refreshable_clone}.

---

##### `IsResourcePoolLeader`<sup>Optional</sup> <a name="IsResourcePoolLeader" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isResourcePoolLeader"></a>

```csharp
public object IsResourcePoolLeader { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_resource_pool_leader DataOciDatabaseAutonomousDatabases#is_resource_pool_leader}.

---

##### `LifecycleStateNotEqualTo`<sup>Optional</sup> <a name="LifecycleStateNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycleStateNotEqualTo"></a>

```csharp
public string LifecycleStateNotEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#lifecycle_state_not_equal_to DataOciDatabaseAutonomousDatabases#lifecycle_state_not_equal_to}.

---

##### `ResourcePoolLeaderId`<sup>Optional</sup> <a name="ResourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.resourcePoolLeaderId"></a>

```csharp
public string ResourcePoolLeaderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#resource_pool_leader_id DataOciDatabaseAutonomousDatabases#resource_pool_leader_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#state DataOciDatabaseAutonomousDatabases#state}.

---

### DataOciDatabaseAutonomousDatabasesFilter <a name="DataOciDatabaseAutonomousDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#name DataOciDatabaseAutonomousDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#values DataOciDatabaseAutonomousDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#regex DataOciDatabaseAutonomousDatabases#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#name DataOciDatabaseAutonomousDatabases#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#values DataOciDatabaseAutonomousDatabases#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#regex DataOciDatabaseAutonomousDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.apexVersion">ApexVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.ordsVersion">OrdsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApexVersion`<sup>Required</sup> <a name="ApexVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.apexVersion"></a>

```csharp
public string ApexVersion { get; }
```

- *Type:* string

---

##### `OrdsVersion`<sup>Required</sup> <a name="OrdsVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.ordsVersion"></a>

```csharp
public string OrdsVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupBucketName">ManualBackupBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupType">ManualBackupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManualBackupBucketName`<sup>Required</sup> <a name="ManualBackupBucketName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupBucketName"></a>

```csharp
public string ManualBackupBucketName { get; }
```

- *Type:* string

---

##### `ManualBackupType`<sup>Required</sup> <a name="ManualBackupType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupType"></a>

```csharp
public string ManualBackupType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.dedicated">Dedicated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.high">High</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.low">Low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.medium">Medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.profiles">Profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public StringMap AllConnectionStrings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Dedicated`<sup>Required</sup> <a name="Dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.dedicated"></a>

```csharp
public string Dedicated { get; }
```

- *Type:* string

---

##### `High`<sup>Required</sup> <a name="High" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.high"></a>

```csharp
public string High { get; }
```

- *Type:* string

---

##### `Low`<sup>Required</sup> <a name="Low" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.low"></a>

```csharp
public string Low { get; }
```

- *Type:* string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.medium"></a>

```csharp
public string Medium { get; }
```

- *Type:* string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.profiles"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList Profiles { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.consumerGroup">ConsumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.hostFormat">HostFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.isRegional">IsRegional</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.sessionMode">SessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.syntaxFormat">SyntaxFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.tlsAuthentication">TlsAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```csharp
public string ConsumerGroup { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `HostFormat`<sup>Required</sup> <a name="HostFormat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```csharp
public string HostFormat { get; }
```

- *Type:* string

---

##### `IsRegional`<sup>Required</sup> <a name="IsRegional" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```csharp
public IResolvable IsRegional { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SessionMode`<sup>Required</sup> <a name="SessionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```csharp
public string SessionMode { get; }
```

- *Type:* string

---

##### `SyntaxFormat`<sup>Required</sup> <a name="SyntaxFormat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```csharp
public string SyntaxFormat { get; }
```

- *Type:* string

---

##### `TlsAuthentication`<sup>Required</sup> <a name="TlsAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```csharp
public string TlsAuthentication { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.apexUrl">ApexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.databaseTransformsUrl">DatabaseTransformsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.graphStudioUrl">GraphStudioUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningNotebookUrl">MachineLearningNotebookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">MachineLearningUserManagementUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.mongoDbUrl">MongoDbUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.ordsUrl">OrdsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.sqlDevWebUrl">SqlDevWebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApexUrl`<sup>Required</sup> <a name="ApexUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.apexUrl"></a>

```csharp
public string ApexUrl { get; }
```

- *Type:* string

---

##### `DatabaseTransformsUrl`<sup>Required</sup> <a name="DatabaseTransformsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```csharp
public string DatabaseTransformsUrl { get; }
```

- *Type:* string

---

##### `GraphStudioUrl`<sup>Required</sup> <a name="GraphStudioUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```csharp
public string GraphStudioUrl { get; }
```

- *Type:* string

---

##### `MachineLearningNotebookUrl`<sup>Required</sup> <a name="MachineLearningNotebookUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```csharp
public string MachineLearningNotebookUrl { get; }
```

- *Type:* string

---

##### `MachineLearningUserManagementUrl`<sup>Required</sup> <a name="MachineLearningUserManagementUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```csharp
public string MachineLearningUserManagementUrl { get; }
```

- *Type:* string

---

##### `MongoDbUrl`<sup>Required</sup> <a name="MongoDbUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```csharp
public string MongoDbUrl { get; }
```

- *Type:* string

---

##### `OrdsUrl`<sup>Required</sup> <a name="OrdsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.ordsUrl"></a>

```csharp
public string OrdsUrl { get; }
```

- *Type:* string

---

##### `SqlDevWebUrl`<sup>Required</sup> <a name="SqlDevWebUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```csharp
public string SqlDevWebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">MaxIdleTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxIdleTimeInMinutes`<sup>Required</sup> <a name="MaxIdleTimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```csharp
public double MaxIdleTimeInMinutes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole">ArnRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider">AutonomousDatabaseProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName">CertificateDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName">DirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey">OkvKmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri">OkvUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri">ServiceEndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri">VaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnRole`<sup>Required</sup> <a name="ArnRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole"></a>

```csharp
public string ArnRole { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseProvider`<sup>Required</sup> <a name="AutonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```csharp
public string AutonomousDatabaseProvider { get; }
```

- *Type:* string

---

##### `CertificateDirectoryName`<sup>Required</sup> <a name="CertificateDirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```csharp
public string CertificateDirectoryName { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName"></a>

```csharp
public string DirectoryName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `OkvKmsKey`<sup>Required</sup> <a name="OkvKmsKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey"></a>

```csharp
public string OkvKmsKey { get; }
```

- *Type:* string

---

##### `OkvUri`<sup>Required</sup> <a name="OkvUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri"></a>

```csharp
public string OkvUri { get; }
```

- *Type:* string

---

##### `ServiceEndpointUri`<sup>Required</sup> <a name="ServiceEndpointUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```csharp
public string ServiceEndpointUri { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `VaultUri`<sup>Required</sup> <a name="VaultUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri"></a>

```csharp
public string VaultUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.timeActivated">TimeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.encryptionKey"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList EncryptionKey { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList</a>

---

##### `TimeActivated`<sup>Required</sup> <a name="TimeActivated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.timeActivated"></a>

```csharp
public string TimeActivated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.arnRole">ArnRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.autonomousDatabaseProvider">AutonomousDatabaseProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateDirectoryName">CertificateDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.directoryName">DirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvKmsKey">OkvKmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvUri">OkvUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.serviceEndpointUri">ServiceEndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultUri">VaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnRole`<sup>Required</sup> <a name="ArnRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.arnRole"></a>

```csharp
public string ArnRole { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseProvider`<sup>Required</sup> <a name="AutonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```csharp
public string AutonomousDatabaseProvider { get; }
```

- *Type:* string

---

##### `CertificateDirectoryName`<sup>Required</sup> <a name="CertificateDirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```csharp
public string CertificateDirectoryName { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.directoryName"></a>

```csharp
public string DirectoryName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `OkvKmsKey`<sup>Required</sup> <a name="OkvKmsKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvKmsKey"></a>

```csharp
public string OkvKmsKey { get; }
```

- *Type:* string

---

##### `OkvUri`<sup>Required</sup> <a name="OkvUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvUri"></a>

```csharp
public string OkvUri { get; }
```

- *Type:* string

---

##### `ServiceEndpointUri`<sup>Required</sup> <a name="ServiceEndpointUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```csharp
public string ServiceEndpointUri { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `VaultUri`<sup>Required</sup> <a name="VaultUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultUri"></a>

```csharp
public string VaultUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.timeActivated">TimeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `TimeActivated`<sup>Required</sup> <a name="TimeActivated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.timeActivated"></a>

```csharp
public string TimeActivated { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lagTimeInSeconds">LagTimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged">TimeDataGuardRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">TimeDisasterRecoveryRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `LagTimeInSeconds`<sup>Required</sup> <a name="LagTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```csharp
public double LagTimeInSeconds { get; }
```

- *Type:* double

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeDataGuardRoleChanged`<sup>Required</sup> <a name="TimeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```csharp
public string TimeDataGuardRoleChanged { get; }
```

- *Type:* string

---

##### `TimeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="TimeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```csharp
public string TimeDisasterRecoveryRoleChanged { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.isDisabled">IsDisabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.repeatCadence">RepeatCadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.timeOfBackup">TimeOfBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```csharp
public IResolvable IsDisabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RepeatCadence`<sup>Required</sup> <a name="RepeatCadence" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```csharp
public string RepeatCadence { get; }
```

- *Type:* string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `TimeOfBackup`<sup>Required</sup> <a name="TimeOfBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```csharp
public string TimeOfBackup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.actualUsedDataStorageSizeInTbs">ActualUsedDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.allocatedStorageSizeInTbs">AllocatedStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.apexDetails">ApexDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.arePrimaryWhitelistedIpsUsed">ArePrimaryWhitelistedIpsUsed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseBackupId">AutonomousDatabaseBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousMaintenanceScheduleType">AutonomousMaintenanceScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupConfig">BackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.byolComputeCountLimit">ByolComputeCountLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cloneType">CloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionUrls">ConnectionUrls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.customerContacts">CustomerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseManagementStatus">DatabaseManagementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataguardRegionType">DataguardRegionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataSafeStatus">DataSafeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbToolsDetails">DbToolsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryRegionType">DisasterRecoveryRegionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryType">DisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKeyHistoryEntry">EncryptionKeyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.failedDataRecoveryInSeconds">FailedDataRecoveryInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryAreaInGbs">InMemoryAreaInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryPercentage">InMemoryPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAccessControlEnabled">IsAccessControlEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingForStorageEnabled">IsAutoScalingForStorageEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDataGuardEnabled">IsDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDedicated">IsDedicated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDevTier">IsDevTier</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isFreeTier">IsFreeTier</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isMtlsConnectionRequired">IsMtlsConnectionRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreview">IsPreview</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreviewVersionWithServiceTermsAccepted">IsPreviewVersionWithServiceTermsAccepted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReconnectCloneEnabled">IsReconnectCloneEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRemoteDataGuardEnabled">IsRemoteDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReplicateAutomaticBackups">IsReplicateAutomaticBackups</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isShrinkOnly">IsShrinkOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyHistoryEntry">KeyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreId">KeyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreWalletName">KeyStoreWalletName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyLifecycleDetails">KmsKeyLifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localDisasterRecoveryType">LocalDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localStandbyDb">LocalStandbyDb</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.maxCpuCoreCount">MaxCpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.netServicesArchitecture">NetServicesArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nextLongTermBackupTimeStamp">NextLongTermBackupTimeStamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.operationsInsightsStatus">OperationsInsightsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.peerDbIds">PeerDbIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.permissionLevel">PermissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.provisionableCpus">ProvisionableCpus</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicConnectionUrls">PublicConnectionUrls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicEndpoint">PublicEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableMode">RefreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableStatus">RefreshableStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryConfiguration">RemoteDisasterRecoveryConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryType">RemoteDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolSummary">ResourcePoolSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.rotateKeyTrigger">RotateKeyTrigger</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.scheduledOperations">ScheduledOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretVersionNumber">SecretVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.securityAttributes">SecurityAttributes</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.shrinkAdbTrigger">ShrinkAdbTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.sourceId">SourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyDb">StandbyDb</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyWhitelistedIps">StandbyWhitelistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.supportedRegionsToCloneTo">SupportedRegionsToCloneTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverTo">SwitchoverTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverToRemotePeerId">SwitchoverToRemotePeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDataGuardRoleChanged">TimeDataGuardRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDeletionOfFreeAutonomousDatabase">TimeDeletionOfFreeAutonomousDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDisasterRecoveryRoleChanged">TimeDisasterRecoveryRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeLocalDataGuardEnabled">TimeLocalDataGuardEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceBegin">TimeMaintenanceBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceEnd">TimeMaintenanceEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfJoiningResourcePool">TimeOfJoiningResourcePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastFailover">TimeOfLastFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefresh">TimeOfLastRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefreshPoint">TimeOfLastRefreshPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastSwitchover">TimeOfLastSwitchover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfNextRefresh">TimeOfNextRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeReclamationOfFreeAutonomousDatabase">TimeReclamationOfFreeAutonomousDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUndeleted">TimeUndeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUntilReconnectCloneEnabled">TimeUntilReconnectCloneEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.totalBackupStorageSizeInGbs">TotalBackupStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInGbs">UsedDataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInTbs">UsedDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.useLatestAvailableBackupTimeStamp">UseLatestAvailableBackupTimeStamp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.whitelistedIps">WhitelistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases">DataOciDatabaseAutonomousDatabasesAutonomousDatabases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.actualUsedDataStorageSizeInTbs"></a>

```csharp
public double ActualUsedDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AllocatedStorageSizeInTbs`<sup>Required</sup> <a name="AllocatedStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.allocatedStorageSizeInTbs"></a>

```csharp
public double AllocatedStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `ApexDetails`<sup>Required</sup> <a name="ApexDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.apexDetails"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList ApexDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList</a>

---

##### `ArePrimaryWhitelistedIpsUsed`<sup>Required</sup> <a name="ArePrimaryWhitelistedIpsUsed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.arePrimaryWhitelistedIpsUsed"></a>

```csharp
public IResolvable ArePrimaryWhitelistedIpsUsed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseBackupId`<sup>Required</sup> <a name="AutonomousDatabaseBackupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseBackupId"></a>

```csharp
public string AutonomousDatabaseBackupId { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `AutonomousMaintenanceScheduleType`<sup>Required</sup> <a name="AutonomousMaintenanceScheduleType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousMaintenanceScheduleType"></a>

```csharp
public string AutonomousMaintenanceScheduleType { get; }
```

- *Type:* string

---

##### `AutoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="AutoRefreshFrequencyInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshFrequencyInSeconds"></a>

```csharp
public double AutoRefreshFrequencyInSeconds { get; }
```

- *Type:* double

---

##### `AutoRefreshPointLagInSeconds`<sup>Required</sup> <a name="AutoRefreshPointLagInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshPointLagInSeconds"></a>

```csharp
public double AutoRefreshPointLagInSeconds { get; }
```

- *Type:* double

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availableUpgradeVersions"></a>

```csharp
public string[] AvailableUpgradeVersions { get; }
```

- *Type:* string[]

---

##### `BackupConfig`<sup>Required</sup> <a name="BackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupConfig"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList BackupConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList</a>

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupRetentionPeriodInDays"></a>

```csharp
public double BackupRetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `ByolComputeCountLimit`<sup>Required</sup> <a name="ByolComputeCountLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.byolComputeCountLimit"></a>

```csharp
public double ByolComputeCountLimit { get; }
```

- *Type:* double

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cloneType"></a>

```csharp
public string CloneType { get; }
```

- *Type:* string

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.clusterPlacementGroupId"></a>

```csharp
public string ClusterPlacementGroupId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionStrings"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList</a>

---

##### `ConnectionUrls`<sup>Required</sup> <a name="ConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionUrls"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList ConnectionUrls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList</a>

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.customerContacts"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList CustomerContacts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList</a>

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; }
```

- *Type:* string

---

##### `DatabaseManagementStatus`<sup>Required</sup> <a name="DatabaseManagementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseManagementStatus"></a>

```csharp
public string DatabaseManagementStatus { get; }
```

- *Type:* string

---

##### `DataguardRegionType`<sup>Required</sup> <a name="DataguardRegionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataguardRegionType"></a>

```csharp
public string DataguardRegionType { get; }
```

- *Type:* string

---

##### `DataSafeStatus`<sup>Required</sup> <a name="DataSafeStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataSafeStatus"></a>

```csharp
public string DataSafeStatus { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbToolsDetails`<sup>Required</sup> <a name="DbToolsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbToolsDetails"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList DbToolsDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList</a>

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisasterRecoveryRegionType`<sup>Required</sup> <a name="DisasterRecoveryRegionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryRegionType"></a>

```csharp
public string DisasterRecoveryRegionType { get; }
```

- *Type:* string

---

##### `DisasterRecoveryType`<sup>Required</sup> <a name="DisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryType"></a>

```csharp
public string DisasterRecoveryType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKey"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList EncryptionKey { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList</a>

---

##### `EncryptionKeyHistoryEntry`<sup>Required</sup> <a name="EncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKeyHistoryEntry"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList EncryptionKeyHistoryEntry { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList</a>

---

##### `FailedDataRecoveryInSeconds`<sup>Required</sup> <a name="FailedDataRecoveryInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.failedDataRecoveryInSeconds"></a>

```csharp
public double FailedDataRecoveryInSeconds { get; }
```

- *Type:* double

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.infrastructureType"></a>

```csharp
public string InfrastructureType { get; }
```

- *Type:* string

---

##### `InMemoryAreaInGbs`<sup>Required</sup> <a name="InMemoryAreaInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryAreaInGbs"></a>

```csharp
public double InMemoryAreaInGbs { get; }
```

- *Type:* double

---

##### `InMemoryPercentage`<sup>Required</sup> <a name="InMemoryPercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryPercentage"></a>

```csharp
public double InMemoryPercentage { get; }
```

- *Type:* double

---

##### `IsAccessControlEnabled`<sup>Required</sup> <a name="IsAccessControlEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAccessControlEnabled"></a>

```csharp
public IResolvable IsAccessControlEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingEnabled"></a>

```csharp
public IResolvable IsAutoScalingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsAutoScalingForStorageEnabled`<sup>Required</sup> <a name="IsAutoScalingForStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingForStorageEnabled"></a>

```csharp
public IResolvable IsAutoScalingForStorageEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDataGuardEnabled`<sup>Required</sup> <a name="IsDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDataGuardEnabled"></a>

```csharp
public IResolvable IsDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDedicated`<sup>Required</sup> <a name="IsDedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDedicated"></a>

```csharp
public IResolvable IsDedicated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDevTier`<sup>Required</sup> <a name="IsDevTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDevTier"></a>

```csharp
public IResolvable IsDevTier { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsFreeTier`<sup>Required</sup> <a name="IsFreeTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isFreeTier"></a>

```csharp
public IResolvable IsFreeTier { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsLocalDataGuardEnabled`<sup>Required</sup> <a name="IsLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isLocalDataGuardEnabled"></a>

```csharp
public IResolvable IsLocalDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMtlsConnectionRequired`<sup>Required</sup> <a name="IsMtlsConnectionRequired" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isMtlsConnectionRequired"></a>

```csharp
public IResolvable IsMtlsConnectionRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPreview`<sup>Required</sup> <a name="IsPreview" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreview"></a>

```csharp
public IResolvable IsPreview { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPreviewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="IsPreviewVersionWithServiceTermsAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreviewVersionWithServiceTermsAccepted"></a>

```csharp
public IResolvable IsPreviewVersionWithServiceTermsAccepted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsReconnectCloneEnabled`<sup>Required</sup> <a name="IsReconnectCloneEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReconnectCloneEnabled"></a>

```csharp
public IResolvable IsReconnectCloneEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRefreshableClone"></a>

```csharp
public IResolvable IsRefreshableClone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRemoteDataGuardEnabled`<sup>Required</sup> <a name="IsRemoteDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRemoteDataGuardEnabled"></a>

```csharp
public IResolvable IsRemoteDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsReplicateAutomaticBackups`<sup>Required</sup> <a name="IsReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReplicateAutomaticBackups"></a>

```csharp
public IResolvable IsReplicateAutomaticBackups { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsShrinkOnly`<sup>Required</sup> <a name="IsShrinkOnly" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isShrinkOnly"></a>

```csharp
public IResolvable IsShrinkOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KeyHistoryEntry`<sup>Required</sup> <a name="KeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyHistoryEntry"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList KeyHistoryEntry { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList</a>

---

##### `KeyStoreId`<sup>Required</sup> <a name="KeyStoreId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreId"></a>

```csharp
public string KeyStoreId { get; }
```

- *Type:* string

---

##### `KeyStoreWalletName`<sup>Required</sup> <a name="KeyStoreWalletName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreWalletName"></a>

```csharp
public string KeyStoreWalletName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyLifecycleDetails`<sup>Required</sup> <a name="KmsKeyLifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyLifecycleDetails"></a>

```csharp
public string KmsKeyLifecycleDetails { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```csharp
public double LocalAdgAutoFailoverMaxDataLossLimit { get; }
```

- *Type:* double

---

##### `LocalDisasterRecoveryType`<sup>Required</sup> <a name="LocalDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localDisasterRecoveryType"></a>

```csharp
public string LocalDisasterRecoveryType { get; }
```

- *Type:* string

---

##### `LocalStandbyDb`<sup>Required</sup> <a name="LocalStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localStandbyDb"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList LocalStandbyDb { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList</a>

---

##### `LongTermBackupSchedule`<sup>Required</sup> <a name="LongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.longTermBackupSchedule"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList LongTermBackupSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList</a>

---

##### `MaxCpuCoreCount`<sup>Required</sup> <a name="MaxCpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.maxCpuCoreCount"></a>

```csharp
public double MaxCpuCoreCount { get; }
```

- *Type:* double

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.memoryPerOracleComputeUnitInGbs"></a>

```csharp
public double MemoryPerOracleComputeUnitInGbs { get; }
```

- *Type:* double

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `NetServicesArchitecture`<sup>Required</sup> <a name="NetServicesArchitecture" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.netServicesArchitecture"></a>

```csharp
public string NetServicesArchitecture { get; }
```

- *Type:* string

---

##### `NextLongTermBackupTimeStamp`<sup>Required</sup> <a name="NextLongTermBackupTimeStamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nextLongTermBackupTimeStamp"></a>

```csharp
public string NextLongTermBackupTimeStamp { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ocpuCount"></a>

```csharp
public double OcpuCount { get; }
```

- *Type:* double

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `OperationsInsightsStatus`<sup>Required</sup> <a name="OperationsInsightsStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.operationsInsightsStatus"></a>

```csharp
public string OperationsInsightsStatus { get; }
```

- *Type:* string

---

##### `PeerDbIds`<sup>Required</sup> <a name="PeerDbIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.peerDbIds"></a>

```csharp
public string[] PeerDbIds { get; }
```

- *Type:* string[]

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.permissionLevel"></a>

```csharp
public string PermissionLevel { get; }
```

- *Type:* string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpoint"></a>

```csharp
public string PrivateEndpoint { get; }
```

- *Type:* string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointLabel"></a>

```csharp
public string PrivateEndpointLabel { get; }
```

- *Type:* string

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.provisionableCpus"></a>

```csharp
public double[] ProvisionableCpus { get; }
```

- *Type:* double[]

---

##### `PublicConnectionUrls`<sup>Required</sup> <a name="PublicConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicConnectionUrls"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList PublicConnectionUrls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList</a>

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicEndpoint"></a>

```csharp
public string PublicEndpoint { get; }
```

- *Type:* string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableMode"></a>

```csharp
public string RefreshableMode { get; }
```

- *Type:* string

---

##### `RefreshableStatus`<sup>Required</sup> <a name="RefreshableStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableStatus"></a>

```csharp
public string RefreshableStatus { get; }
```

- *Type:* string

---

##### `RemoteDisasterRecoveryConfiguration`<sup>Required</sup> <a name="RemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryConfiguration"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList RemoteDisasterRecoveryConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList</a>

---

##### `RemoteDisasterRecoveryType`<sup>Required</sup> <a name="RemoteDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryType"></a>

```csharp
public string RemoteDisasterRecoveryType { get; }
```

- *Type:* string

---

##### `ResourcePoolLeaderId`<sup>Required</sup> <a name="ResourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolLeaderId"></a>

```csharp
public string ResourcePoolLeaderId { get; }
```

- *Type:* string

---

##### `ResourcePoolSummary`<sup>Required</sup> <a name="ResourcePoolSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolSummary"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList ResourcePoolSummary { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList</a>

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `RotateKeyTrigger`<sup>Required</sup> <a name="RotateKeyTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.rotateKeyTrigger"></a>

```csharp
public IResolvable RotateKeyTrigger { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ScheduledOperations`<sup>Required</sup> <a name="ScheduledOperations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.scheduledOperations"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList ScheduledOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList</a>

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretVersionNumber`<sup>Required</sup> <a name="SecretVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretVersionNumber"></a>

```csharp
public double SecretVersionNumber { get; }
```

- *Type:* double

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.securityAttributes"></a>

```csharp
public StringMap SecurityAttributes { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.serviceConsoleUrl"></a>

```csharp
public string ServiceConsoleUrl { get; }
```

- *Type:* string

---

##### `ShrinkAdbTrigger`<sup>Required</sup> <a name="ShrinkAdbTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.shrinkAdbTrigger"></a>

```csharp
public double ShrinkAdbTrigger { get; }
```

- *Type:* double

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.sourceId"></a>

```csharp
public string SourceId { get; }
```

- *Type:* string

---

##### `StandbyDb`<sup>Required</sup> <a name="StandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyDb"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList StandbyDb { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList</a>

---

##### `StandbyWhitelistedIps`<sup>Required</sup> <a name="StandbyWhitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyWhitelistedIps"></a>

```csharp
public string[] StandbyWhitelistedIps { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `SupportedRegionsToCloneTo`<sup>Required</sup> <a name="SupportedRegionsToCloneTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.supportedRegionsToCloneTo"></a>

```csharp
public string[] SupportedRegionsToCloneTo { get; }
```

- *Type:* string[]

---

##### `SwitchoverTo`<sup>Required</sup> <a name="SwitchoverTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverTo"></a>

```csharp
public string SwitchoverTo { get; }
```

- *Type:* string

---

##### `SwitchoverToRemotePeerId`<sup>Required</sup> <a name="SwitchoverToRemotePeerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverToRemotePeerId"></a>

```csharp
public string SwitchoverToRemotePeerId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeDataGuardRoleChanged`<sup>Required</sup> <a name="TimeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDataGuardRoleChanged"></a>

```csharp
public string TimeDataGuardRoleChanged { get; }
```

- *Type:* string

---

##### `TimeDeletionOfFreeAutonomousDatabase`<sup>Required</sup> <a name="TimeDeletionOfFreeAutonomousDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDeletionOfFreeAutonomousDatabase"></a>

```csharp
public string TimeDeletionOfFreeAutonomousDatabase { get; }
```

- *Type:* string

---

##### `TimeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="TimeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```csharp
public string TimeDisasterRecoveryRoleChanged { get; }
```

- *Type:* string

---

##### `TimeLocalDataGuardEnabled`<sup>Required</sup> <a name="TimeLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeLocalDataGuardEnabled"></a>

```csharp
public string TimeLocalDataGuardEnabled { get; }
```

- *Type:* string

---

##### `TimeMaintenanceBegin`<sup>Required</sup> <a name="TimeMaintenanceBegin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceBegin"></a>

```csharp
public string TimeMaintenanceBegin { get; }
```

- *Type:* string

---

##### `TimeMaintenanceEnd`<sup>Required</sup> <a name="TimeMaintenanceEnd" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceEnd"></a>

```csharp
public string TimeMaintenanceEnd { get; }
```

- *Type:* string

---

##### `TimeOfAutoRefreshStart`<sup>Required</sup> <a name="TimeOfAutoRefreshStart" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfAutoRefreshStart"></a>

```csharp
public string TimeOfAutoRefreshStart { get; }
```

- *Type:* string

---

##### `TimeOfJoiningResourcePool`<sup>Required</sup> <a name="TimeOfJoiningResourcePool" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfJoiningResourcePool"></a>

```csharp
public string TimeOfJoiningResourcePool { get; }
```

- *Type:* string

---

##### `TimeOfLastFailover`<sup>Required</sup> <a name="TimeOfLastFailover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastFailover"></a>

```csharp
public string TimeOfLastFailover { get; }
```

- *Type:* string

---

##### `TimeOfLastRefresh`<sup>Required</sup> <a name="TimeOfLastRefresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefresh"></a>

```csharp
public string TimeOfLastRefresh { get; }
```

- *Type:* string

---

##### `TimeOfLastRefreshPoint`<sup>Required</sup> <a name="TimeOfLastRefreshPoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefreshPoint"></a>

```csharp
public string TimeOfLastRefreshPoint { get; }
```

- *Type:* string

---

##### `TimeOfLastSwitchover`<sup>Required</sup> <a name="TimeOfLastSwitchover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastSwitchover"></a>

```csharp
public string TimeOfLastSwitchover { get; }
```

- *Type:* string

---

##### `TimeOfNextRefresh`<sup>Required</sup> <a name="TimeOfNextRefresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfNextRefresh"></a>

```csharp
public string TimeOfNextRefresh { get; }
```

- *Type:* string

---

##### `TimeReclamationOfFreeAutonomousDatabase`<sup>Required</sup> <a name="TimeReclamationOfFreeAutonomousDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeReclamationOfFreeAutonomousDatabase"></a>

```csharp
public string TimeReclamationOfFreeAutonomousDatabase { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `TimeUndeleted`<sup>Required</sup> <a name="TimeUndeleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUndeleted"></a>

```csharp
public string TimeUndeleted { get; }
```

- *Type:* string

---

##### `TimeUntilReconnectCloneEnabled`<sup>Required</sup> <a name="TimeUntilReconnectCloneEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUntilReconnectCloneEnabled"></a>

```csharp
public string TimeUntilReconnectCloneEnabled { get; }
```

- *Type:* string

---

##### `TotalBackupStorageSizeInGbs`<sup>Required</sup> <a name="TotalBackupStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.totalBackupStorageSizeInGbs"></a>

```csharp
public double TotalBackupStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `UsedDataStorageSizeInGbs`<sup>Required</sup> <a name="UsedDataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInGbs"></a>

```csharp
public double UsedDataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `UsedDataStorageSizeInTbs`<sup>Required</sup> <a name="UsedDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInTbs"></a>

```csharp
public double UsedDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `UseLatestAvailableBackupTimeStamp`<sup>Required</sup> <a name="UseLatestAvailableBackupTimeStamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.useLatestAvailableBackupTimeStamp"></a>

```csharp
public IResolvable UseLatestAvailableBackupTimeStamp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `WhitelistedIps`<sup>Required</sup> <a name="WhitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.whitelistedIps"></a>

```csharp
public string[] WhitelistedIps { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabases InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases">DataOciDatabaseAutonomousDatabasesAutonomousDatabases</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.apexUrl">ApexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.databaseTransformsUrl">DatabaseTransformsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.graphStudioUrl">GraphStudioUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl">MachineLearningNotebookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">MachineLearningUserManagementUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.mongoDbUrl">MongoDbUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.ordsUrl">OrdsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.sqlDevWebUrl">SqlDevWebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApexUrl`<sup>Required</sup> <a name="ApexUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.apexUrl"></a>

```csharp
public string ApexUrl { get; }
```

- *Type:* string

---

##### `DatabaseTransformsUrl`<sup>Required</sup> <a name="DatabaseTransformsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```csharp
public string DatabaseTransformsUrl { get; }
```

- *Type:* string

---

##### `GraphStudioUrl`<sup>Required</sup> <a name="GraphStudioUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```csharp
public string GraphStudioUrl { get; }
```

- *Type:* string

---

##### `MachineLearningNotebookUrl`<sup>Required</sup> <a name="MachineLearningNotebookUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```csharp
public string MachineLearningNotebookUrl { get; }
```

- *Type:* string

---

##### `MachineLearningUserManagementUrl`<sup>Required</sup> <a name="MachineLearningUserManagementUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```csharp
public string MachineLearningUserManagementUrl { get; }
```

- *Type:* string

---

##### `MongoDbUrl`<sup>Required</sup> <a name="MongoDbUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```csharp
public string MongoDbUrl { get; }
```

- *Type:* string

---

##### `OrdsUrl`<sup>Required</sup> <a name="OrdsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.ordsUrl"></a>

```csharp
public string OrdsUrl { get; }
```

- *Type:* string

---

##### `SqlDevWebUrl`<sup>Required</sup> <a name="SqlDevWebUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```csharp
public string SqlDevWebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType">DisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups">IsReplicateAutomaticBackups</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby">IsSnapshotStandby</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill">TimeSnapshotStandbyEnabledTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisasterRecoveryType`<sup>Required</sup> <a name="DisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType"></a>

```csharp
public string DisasterRecoveryType { get; }
```

- *Type:* string

---

##### `IsReplicateAutomaticBackups`<sup>Required</sup> <a name="IsReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups"></a>

```csharp
public IResolvable IsReplicateAutomaticBackups { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSnapshotStandby`<sup>Required</sup> <a name="IsSnapshotStandby" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby"></a>

```csharp
public IResolvable IsSnapshotStandby { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TimeSnapshotStandbyEnabledTill`<sup>Required</sup> <a name="TimeSnapshotStandbyEnabledTill" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill"></a>

```csharp
public string TimeSnapshotStandbyEnabledTill { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.isDisabled">IsDisabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.poolSize">PoolSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.isDisabled"></a>

```csharp
public IResolvable IsDisabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.poolSize"></a>

```csharp
public double PoolSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStartTime">ScheduledStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStopTime">ScheduledStopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.dayOfWeek"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList DayOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList</a>

---

##### `ScheduledStartTime`<sup>Required</sup> <a name="ScheduledStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```csharp
public string ScheduledStartTime { get; }
```

- *Type:* string

---

##### `ScheduledStopTime`<sup>Required</sup> <a name="ScheduledStopTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```csharp
public string ScheduledStopTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lagTimeInSeconds">LagTimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDataGuardRoleChanged">TimeDataGuardRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">TimeDisasterRecoveryRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `LagTimeInSeconds`<sup>Required</sup> <a name="LagTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```csharp
public double LagTimeInSeconds { get; }
```

- *Type:* double

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeDataGuardRoleChanged`<sup>Required</sup> <a name="TimeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```csharp
public string TimeDataGuardRoleChanged { get; }
```

- *Type:* string

---

##### `TimeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="TimeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```csharp
public string TimeDisasterRecoveryRoleChanged { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb</a>

---


### DataOciDatabaseAutonomousDatabasesFilterList <a name="DataOciDatabaseAutonomousDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabasesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseAutonomousDatabasesFilterOutputReference <a name="DataOciDatabaseAutonomousDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabasesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



