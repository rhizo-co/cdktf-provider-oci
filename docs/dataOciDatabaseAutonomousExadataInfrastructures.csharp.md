# `dataOciDatabaseAutonomousExadataInfrastructures` Submodule <a name="`dataOciDatabaseAutonomousExadataInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousExadataInfrastructures <a name="DataOciDatabaseAutonomousExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures oci_database_autonomous_exadata_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructures(Construct Scope, string Id, DataOciDatabaseAutonomousExadataInfrastructuresConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig">DataOciDatabaseAutonomousExadataInfrastructuresConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig">DataOciDatabaseAutonomousExadataInfrastructuresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousExadataInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousExadataInfrastructures.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousExadataInfrastructures.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousExadataInfrastructures.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousExadataInfrastructures.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousExadataInfrastructures resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousExadataInfrastructures to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousExadataInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousExadataInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.autonomousExadataInfrastructures">AutonomousExadataInfrastructures</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList">DataOciDatabaseAutonomousExadataInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousExadataInfrastructures`<sup>Required</sup> <a name="AutonomousExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.autonomousExadataInfrastructures"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList AutonomousExadataInfrastructures { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.filter"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList">DataOciDatabaseAutonomousExadataInfrastructuresFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures {

};
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow {

};
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek {

};
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails {

};
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek {

};
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths {

};
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths {

};
```


### DataOciDatabaseAutonomousExadataInfrastructuresConfig <a name="DataOciDatabaseAutonomousExadataInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AvailabilityDomain = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#compartment_id DataOciDatabaseAutonomousExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#availability_domain DataOciDatabaseAutonomousExadataInfrastructures#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#display_name DataOciDatabaseAutonomousExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#id DataOciDatabaseAutonomousExadataInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#state DataOciDatabaseAutonomousExadataInfrastructures#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#compartment_id DataOciDatabaseAutonomousExadataInfrastructures#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#availability_domain DataOciDatabaseAutonomousExadataInfrastructures#availability_domain}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#display_name DataOciDatabaseAutonomousExadataInfrastructures#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#filter DataOciDatabaseAutonomousExadataInfrastructures#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#id DataOciDatabaseAutonomousExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#state DataOciDatabaseAutonomousExadataInfrastructures#state}.

---

### DataOciDatabaseAutonomousExadataInfrastructuresFilter <a name="DataOciDatabaseAutonomousExadataInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#name DataOciDatabaseAutonomousExadataInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#values DataOciDatabaseAutonomousExadataInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#regex DataOciDatabaseAutonomousExadataInfrastructures#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#name DataOciDatabaseAutonomousExadataInfrastructures#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#values DataOciDatabaseAutonomousExadataInfrastructures#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#regex DataOciDatabaseAutonomousExadataInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.get"></a>

```csharp
private DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get"></a>

```csharp
private DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```csharp
private DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.get"></a>

```csharp
private DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.get"></a>

```csharp
private DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.skipRu">SkipRu</a></code> | <code>HashiCorp.Cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public IResolvable IsMonthlyPatchingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.months"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```csharp
public BooleanList SkipRu { get; }
```

- *Type:* HashiCorp.Cdktf.BooleanList

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.get"></a>

```csharp
private DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.get"></a>

```csharp
private DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.skipRu">SkipRu</a></code> | <code>HashiCorp.Cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public IResolvable IsMonthlyPatchingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.months"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.skipRu"></a>

```csharp
public BooleanList SkipRu { get; }
```

- *Type:* HashiCorp.Cdktf.BooleanList

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.createAsync">CreateAsync</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.lastMaintenanceRunId">LastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.maintenanceWindowDetails">MaintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.scanDnsName">ScanDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CreateAsync`<sup>Required</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.createAsync"></a>

```csharp
public IResolvable CreateAsync { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastMaintenanceRunId`<sup>Required</sup> <a name="LastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.lastMaintenanceRunId"></a>

```csharp
public string LastMaintenanceRunId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.maintenanceWindow"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList</a>

---

##### `MaintenanceWindowDetails`<sup>Required</sup> <a name="MaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.maintenanceWindowDetails"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList MaintenanceWindowDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList</a>

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.nextMaintenanceRunId"></a>

```csharp
public string NextMaintenanceRunId { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.scanDnsName"></a>

```csharp
public string ScanDnsName { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresFilterList <a name="DataOciDatabaseAutonomousExadataInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.get"></a>

```csharp
private DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



