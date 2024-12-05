# `dataOciCloudMigrationsMigrationPlans` Submodule <a name="`dataOciCloudMigrationsMigrationPlans` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationPlans <a name="DataOciCloudMigrationsMigrationPlans" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans oci_cloud_migrations_migration_plans}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlans(Construct Scope, string Id, DataOciCloudMigrationsMigrationPlansConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig">DataOciCloudMigrationsMigrationPlansConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig">DataOciCloudMigrationsMigrationPlansConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationId">ResetMigrationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationPlanId">ResetMigrationPlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMigrationId` <a name="ResetMigrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationId"></a>

```csharp
private void ResetMigrationId()
```

##### `ResetMigrationPlanId` <a name="ResetMigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationPlanId"></a>

```csharp
private void ResetMigrationPlanId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlans resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlans.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlans.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlans.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlans.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlans resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlans to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudMigrationsMigrationPlans that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlans to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList">DataOciCloudMigrationsMigrationPlansFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanCollection">MigrationPlanCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationIdInput">MigrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanIdInput">MigrationPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationId">MigrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanId">MigrationPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filter"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList">DataOciCloudMigrationsMigrationPlansFilterList</a>

---

##### `MigrationPlanCollection`<sup>Required</sup> <a name="MigrationPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanCollection"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList MigrationPlanCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MigrationIdInput`<sup>Optional</sup> <a name="MigrationIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationIdInput"></a>

```csharp
public string MigrationIdInput { get; }
```

- *Type:* string

---

##### `MigrationPlanIdInput`<sup>Optional</sup> <a name="MigrationPlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanIdInput"></a>

```csharp
public string MigrationPlanIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationId"></a>

```csharp
public string MigrationId { get; }
```

- *Type:* string

---

##### `MigrationPlanId`<sup>Required</sup> <a name="MigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanId"></a>

```csharp
public string MigrationPlanId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationPlansConfig <a name="DataOciCloudMigrationsMigrationPlansConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansConfig {
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
    string MigrationId = null,
    string MigrationPlanId = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationId">MigrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationPlanId">MigrationPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#filter DataOciCloudMigrationsMigrationPlans#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MigrationId`<sup>Optional</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationId"></a>

```csharp
public string MigrationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}.

---

##### `MigrationPlanId`<sup>Optional</sup> <a name="MigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationPlanId"></a>

```csharp
public string MigrationPlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}.

---

### DataOciCloudMigrationsMigrationPlansFilter <a name="DataOciCloudMigrationsMigrationPlansFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#name DataOciCloudMigrationsMigrationPlans#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#values DataOciCloudMigrationsMigrationPlans#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#regex DataOciCloudMigrationsMigrationPlans#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#name DataOciCloudMigrationsMigrationPlans#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#values DataOciCloudMigrationsMigrationPlans#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#regex DataOciCloudMigrationsMigrationPlans#regex}.

---

### DataOciCloudMigrationsMigrationPlansMigrationPlanCollection <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollection {

};
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems {

};
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats {

};
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost {

};
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute {

};
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage {

};
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage {

};
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes {

};
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies {

};
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationPlansFilterList <a name="DataOciCloudMigrationsMigrationPlansFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlansFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCloudMigrationsMigrationPlansFilterOutputReference <a name="DataOciCloudMigrationsMigrationPlansFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.totalEstimatedCost">TotalEstimatedCost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.vmCount">VmCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalEstimatedCost`<sup>Required</sup> <a name="TotalEstimatedCost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.totalEstimatedCost"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList TotalEstimatedCost { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList</a>

---

##### `VmCount`<sup>Required</sup> <a name="VmCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.vmCount"></a>

```csharp
public double VmCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount">GpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour">GpuPerHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription">GpuPerHourBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb">MemoryAmountGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour">MemoryGbPerHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription">MemoryGbPerHourBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour">OcpuPerHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription">OcpuPerHourBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour">TotalPerHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription">TotalPerHourBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GpuCount`<sup>Required</sup> <a name="GpuCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount"></a>

```csharp
public double GpuCount { get; }
```

- *Type:* double

---

##### `GpuPerHour`<sup>Required</sup> <a name="GpuPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour"></a>

```csharp
public double GpuPerHour { get; }
```

- *Type:* double

---

##### `GpuPerHourBySubscription`<sup>Required</sup> <a name="GpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription"></a>

```csharp
public double GpuPerHourBySubscription { get; }
```

- *Type:* double

---

##### `MemoryAmountGb`<sup>Required</sup> <a name="MemoryAmountGb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb"></a>

```csharp
public double MemoryAmountGb { get; }
```

- *Type:* double

---

##### `MemoryGbPerHour`<sup>Required</sup> <a name="MemoryGbPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour"></a>

```csharp
public double MemoryGbPerHour { get; }
```

- *Type:* double

---

##### `MemoryGbPerHourBySubscription`<sup>Required</sup> <a name="MemoryGbPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription"></a>

```csharp
public double MemoryGbPerHourBySubscription { get; }
```

- *Type:* double

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount"></a>

```csharp
public double OcpuCount { get; }
```

- *Type:* double

---

##### `OcpuPerHour`<sup>Required</sup> <a name="OcpuPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour"></a>

```csharp
public double OcpuPerHour { get; }
```

- *Type:* double

---

##### `OcpuPerHourBySubscription`<sup>Required</sup> <a name="OcpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription"></a>

```csharp
public double OcpuPerHourBySubscription { get; }
```

- *Type:* double

---

##### `TotalPerHour`<sup>Required</sup> <a name="TotalPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour"></a>

```csharp
public double TotalPerHour { get; }
```

- *Type:* double

---

##### `TotalPerHourBySubscription`<sup>Required</sup> <a name="TotalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription"></a>

```csharp
public double TotalPerHourBySubscription { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour">TotalPerHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription">TotalPerHourBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalPerHour`<sup>Required</sup> <a name="TotalPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour"></a>

```csharp
public double TotalPerHour { get; }
```

- *Type:* double

---

##### `TotalPerHourBySubscription`<sup>Required</sup> <a name="TotalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription"></a>

```csharp
public double TotalPerHourBySubscription { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute">Compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage">OsImage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage">Storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth">TotalEstimationPerMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription">TotalEstimationPerMonthBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList Compute { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList</a>

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `OsImage`<sup>Required</sup> <a name="OsImage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList OsImage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList Storage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList</a>

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TotalEstimationPerMonth`<sup>Required</sup> <a name="TotalEstimationPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth"></a>

```csharp
public double TotalEstimationPerMonth { get; }
```

- *Type:* double

---

##### `TotalEstimationPerMonthBySubscription`<sup>Required</sup> <a name="TotalEstimationPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription"></a>

```csharp
public double TotalEstimationPerMonthBySubscription { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth">TotalGbPerMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription">TotalGbPerMonthBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes">Volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalGbPerMonth`<sup>Required</sup> <a name="TotalGbPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth"></a>

```csharp
public double TotalGbPerMonth { get; }
```

- *Type:* double

---

##### `TotalGbPerMonthBySubscription`<sup>Required</sup> <a name="TotalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription"></a>

```csharp
public double TotalGbPerMonthBySubscription { get; }
```

- *Type:* double

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList Volumes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb">CapacityGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth">TotalGbPerMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription">TotalGbPerMonthBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb"></a>

```csharp
public double CapacityGb { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `TotalGbPerMonth`<sup>Required</sup> <a name="TotalGbPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth"></a>

```csharp
public double TotalGbPerMonth { get; }
```

- *Type:* double

---

##### `TotalGbPerMonthBySubscription`<sup>Required</sup> <a name="TotalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription"></a>

```csharp
public double TotalGbPerMonthBySubscription { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.calculatedLimits">CalculatedLimits</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationId">MigrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationPlanStats">MigrationPlanStats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.referenceToRmsStack">ReferenceToRmsStack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.sourceMigrationPlanId">SourceMigrationPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.strategies">Strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.targetEnvironments">TargetEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CalculatedLimits`<sup>Required</sup> <a name="CalculatedLimits" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.calculatedLimits"></a>

```csharp
public StringMap CalculatedLimits { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationId"></a>

```csharp
public string MigrationId { get; }
```

- *Type:* string

---

##### `MigrationPlanStats`<sup>Required</sup> <a name="MigrationPlanStats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationPlanStats"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList MigrationPlanStats { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList</a>

---

##### `ReferenceToRmsStack`<sup>Required</sup> <a name="ReferenceToRmsStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.referenceToRmsStack"></a>

```csharp
public string ReferenceToRmsStack { get; }
```

- *Type:* string

---

##### `SourceMigrationPlanId`<sup>Required</sup> <a name="SourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.sourceMigrationPlanId"></a>

```csharp
public string SourceMigrationPlanId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Strategies`<sup>Required</sup> <a name="Strategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.strategies"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList Strategies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetEnvironments`<sup>Required</sup> <a name="TargetEnvironments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.targetEnvironments"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList TargetEnvironments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.adjustmentMultiplier">AdjustmentMultiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricTimeWindow">MetricTimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricType">MetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.percentile">Percentile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.strategyType">StrategyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdjustmentMultiplier`<sup>Required</sup> <a name="AdjustmentMultiplier" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.adjustmentMultiplier"></a>

```csharp
public double AdjustmentMultiplier { get; }
```

- *Type:* double

---

##### `MetricTimeWindow`<sup>Required</sup> <a name="MetricTimeWindow" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricTimeWindow"></a>

```csharp
public string MetricTimeWindow { get; }
```

- *Type:* string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricType"></a>

```csharp
public string MetricType { get; }
```

- *Type:* string

---

##### `Percentile`<sup>Required</sup> <a name="Percentile" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.percentile"></a>

```csharp
public string Percentile { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.strategyType"></a>

```csharp
public string StrategyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.dedicatedVmHost">DedicatedVmHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.msLicense">MsLicense</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.preferredShapeType">PreferredShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.subnet">Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetCompartmentId">TargetCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetEnvironmentType">TargetEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.vcn">Vcn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `DedicatedVmHost`<sup>Required</sup> <a name="DedicatedVmHost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.dedicatedVmHost"></a>

```csharp
public string DedicatedVmHost { get; }
```

- *Type:* string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `MsLicense`<sup>Required</sup> <a name="MsLicense" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.msLicense"></a>

```csharp
public string MsLicense { get; }
```

- *Type:* string

---

##### `PreferredShapeType`<sup>Required</sup> <a name="PreferredShapeType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.preferredShapeType"></a>

```csharp
public string PreferredShapeType { get; }
```

- *Type:* string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.subnet"></a>

```csharp
public string Subnet { get; }
```

- *Type:* string

---

##### `TargetCompartmentId`<sup>Required</sup> <a name="TargetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetCompartmentId"></a>

```csharp
public string TargetCompartmentId { get; }
```

- *Type:* string

---

##### `TargetEnvironmentType`<sup>Required</sup> <a name="TargetEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetEnvironmentType"></a>

```csharp
public string TargetEnvironmentType { get; }
```

- *Type:* string

---

##### `Vcn`<sup>Required</sup> <a name="Vcn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.vcn"></a>

```csharp
public string Vcn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection">DataOciCloudMigrationsMigrationPlansMigrationPlanCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.items"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection">DataOciCloudMigrationsMigrationPlansMigrationPlanCollection</a>

---



