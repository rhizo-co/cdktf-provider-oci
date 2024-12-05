# `dataOciDatabaseDbSystemStoragePerformances` Submodule <a name="`dataOciDatabaseDbSystemStoragePerformances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemStoragePerformances <a name="DataOciDatabaseDbSystemStoragePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances oci_database_db_system_storage_performances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformances(Construct Scope, string Id, DataOciDatabaseDbSystemStoragePerformancesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig">DataOciDatabaseDbSystemStoragePerformancesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig">DataOciDatabaseDbSystemStoragePerformancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetShapeType">ResetShapeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetShapeType` <a name="ResetShapeType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetShapeType"></a>

```csharp
private void ResetShapeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemStoragePerformances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbSystemStoragePerformances.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbSystemStoragePerformances.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbSystemStoragePerformances.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbSystemStoragePerformances.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemStoragePerformances resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDbSystemStoragePerformances to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDbSystemStoragePerformances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemStoragePerformances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dbSystemStoragePerformances">DbSystemStoragePerformances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList">DataOciDatabaseDbSystemStoragePerformancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeTypeInput">ShapeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagementInput">StorageManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeType">ShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagement">StorageManagement</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DbSystemStoragePerformances`<sup>Required</sup> <a name="DbSystemStoragePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dbSystemStoragePerformances"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList DbSystemStoragePerformances { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filter"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList">DataOciDatabaseDbSystemStoragePerformancesFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ShapeTypeInput`<sup>Optional</sup> <a name="ShapeTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeTypeInput"></a>

```csharp
public string ShapeTypeInput { get; }
```

- *Type:* string

---

##### `StorageManagementInput`<sup>Optional</sup> <a name="StorageManagementInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagementInput"></a>

```csharp
public string StorageManagementInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ShapeType`<sup>Required</sup> <a name="ShapeType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeType"></a>

```csharp
public string ShapeType { get; }
```

- *Type:* string

---

##### `StorageManagement`<sup>Required</sup> <a name="StorageManagement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagement"></a>

```csharp
public string StorageManagement { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemStoragePerformancesConfig <a name="DataOciDatabaseDbSystemStoragePerformancesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string StorageManagement,
    object Filter = null,
    string Id = null,
    string ShapeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.storageManagement">StorageManagement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#storage_management DataOciDatabaseDbSystemStoragePerformances#storage_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#id DataOciDatabaseDbSystemStoragePerformances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.shapeType">ShapeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#shape_type DataOciDatabaseDbSystemStoragePerformances#shape_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `StorageManagement`<sup>Required</sup> <a name="StorageManagement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.storageManagement"></a>

```csharp
public string StorageManagement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#storage_management DataOciDatabaseDbSystemStoragePerformances#storage_management}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#filter DataOciDatabaseDbSystemStoragePerformances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#id DataOciDatabaseDbSystemStoragePerformances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShapeType`<sup>Optional</sup> <a name="ShapeType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.shapeType"></a>

```csharp
public string ShapeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#shape_type DataOciDatabaseDbSystemStoragePerformances#shape_type}.

---

### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances {

};
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance {

};
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance {

};
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct {

};
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance {

};
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance {

};
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct {

};
```


### DataOciDatabaseDbSystemStoragePerformancesFilter <a name="DataOciDatabaseDbSystemStoragePerformancesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#name DataOciDatabaseDbSystemStoragePerformances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#values DataOciDatabaseDbSystemStoragePerformances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#regex DataOciDatabaseDbSystemStoragePerformances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#name DataOciDatabaseDbSystemStoragePerformances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#values DataOciDatabaseDbSystemStoragePerformances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#regex DataOciDatabaseDbSystemStoragePerformances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.get"></a>

```csharp
private DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops">DiskIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps">DiskThroughputInMbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskIops`<sup>Required</sup> <a name="DiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops"></a>

```csharp
public double DiskIops { get; }
```

- *Type:* double

---

##### `DiskThroughputInMbps`<sup>Required</sup> <a name="DiskThroughputInMbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```csharp
public double DiskThroughputInMbps { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.get"></a>

```csharp
private DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops">DiskIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps">DiskThroughputInMbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskIops`<sup>Required</sup> <a name="DiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops"></a>

```csharp
public double DiskIops { get; }
```

- *Type:* double

---

##### `DiskThroughputInMbps`<sup>Required</sup> <a name="DiskThroughputInMbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```csharp
public double DiskThroughputInMbps { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.get"></a>

```csharp
private DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.balancedDiskPerformance">BalancedDiskPerformance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.highDiskPerformance">HighDiskPerformance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.sizeInGbs">SizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BalancedDiskPerformance`<sup>Required</sup> <a name="BalancedDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.balancedDiskPerformance"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList BalancedDiskPerformance { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList</a>

---

##### `HighDiskPerformance`<sup>Required</sup> <a name="HighDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.highDiskPerformance"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList HighDiskPerformance { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList</a>

---

##### `SizeInGbs`<sup>Required</sup> <a name="SizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.sizeInGbs"></a>

```csharp
public double SizeInGbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.get"></a>

```csharp
private DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.dataStoragePerformanceList">DataStoragePerformanceList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.recoStoragePerformanceList">RecoStoragePerformanceList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.shapeType">ShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoragePerformanceList`<sup>Required</sup> <a name="DataStoragePerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.dataStoragePerformanceList"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList DataStoragePerformanceList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList</a>

---

##### `RecoStoragePerformanceList`<sup>Required</sup> <a name="RecoStoragePerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.recoStoragePerformanceList"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList RecoStoragePerformanceList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList</a>

---

##### `ShapeType`<sup>Required</sup> <a name="ShapeType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.shapeType"></a>

```csharp
public string ShapeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.get"></a>

```csharp
private DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops">DiskIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps">DiskThroughputInMbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskIops`<sup>Required</sup> <a name="DiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops"></a>

```csharp
public double DiskIops { get; }
```

- *Type:* double

---

##### `DiskThroughputInMbps`<sup>Required</sup> <a name="DiskThroughputInMbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```csharp
public double DiskThroughputInMbps { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.get"></a>

```csharp
private DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops">DiskIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps">DiskThroughputInMbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskIops`<sup>Required</sup> <a name="DiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops"></a>

```csharp
public double DiskIops { get; }
```

- *Type:* double

---

##### `DiskThroughputInMbps`<sup>Required</sup> <a name="DiskThroughputInMbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```csharp
public double DiskThroughputInMbps { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.get"></a>

```csharp
private DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.balancedDiskPerformance">BalancedDiskPerformance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.highDiskPerformance">HighDiskPerformance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.sizeInGbs">SizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BalancedDiskPerformance`<sup>Required</sup> <a name="BalancedDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.balancedDiskPerformance"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList BalancedDiskPerformance { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList</a>

---

##### `HighDiskPerformance`<sup>Required</sup> <a name="HighDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.highDiskPerformance"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList HighDiskPerformance { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList</a>

---

##### `SizeInGbs`<sup>Required</sup> <a name="SizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.sizeInGbs"></a>

```csharp
public double SizeInGbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct</a>

---


### DataOciDatabaseDbSystemStoragePerformancesFilterList <a name="DataOciDatabaseDbSystemStoragePerformancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.get"></a>

```csharp
private DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



