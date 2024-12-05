# `dataOciDatabaseManagementJobExecutionsStatuses` Submodule <a name="`dataOciDatabaseManagementJobExecutionsStatuses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementJobExecutionsStatuses <a name="DataOciDatabaseManagementJobExecutionsStatuses" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses oci_database_management_job_executions_statuses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementJobExecutionsStatuses(Construct Scope, string Id, DataOciDatabaseManagementJobExecutionsStatusesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig">DataOciDatabaseManagementJobExecutionsStatusesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig">DataOciDatabaseManagementJobExecutionsStatusesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseGroupId">ResetManagedDatabaseGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseId">ResetManagedDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedDatabaseGroupId` <a name="ResetManagedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseGroupId"></a>

```csharp
private void ResetManagedDatabaseGroupId()
```

##### `ResetManagedDatabaseId` <a name="ResetManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseId"></a>

```csharp
private void ResetManagedDatabaseId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementJobExecutionsStatuses resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementJobExecutionsStatuses.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementJobExecutionsStatuses.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementJobExecutionsStatuses.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementJobExecutionsStatuses.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementJobExecutionsStatuses resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementJobExecutionsStatuses to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementJobExecutionsStatuses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementJobExecutionsStatuses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList">DataOciDatabaseManagementJobExecutionsStatusesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.jobExecutionsStatusSummaryCollection">JobExecutionsStatusSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupIdInput">ManagedDatabaseGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupId">ManagedDatabaseGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filter"></a>

```csharp
public DataOciDatabaseManagementJobExecutionsStatusesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList">DataOciDatabaseManagementJobExecutionsStatusesFilterList</a>

---

##### `JobExecutionsStatusSummaryCollection`<sup>Required</sup> <a name="JobExecutionsStatusSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.jobExecutionsStatusSummaryCollection"></a>

```csharp
public DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList JobExecutionsStatusSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedDatabaseGroupIdInput`<sup>Optional</sup> <a name="ManagedDatabaseGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupIdInput"></a>

```csharp
public string ManagedDatabaseGroupIdInput { get; }
```

- *Type:* string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedDatabaseGroupId`<sup>Required</sup> <a name="ManagedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupId"></a>

```csharp
public string ManagedDatabaseGroupId { get; }
```

- *Type:* string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementJobExecutionsStatusesConfig <a name="DataOciDatabaseManagementJobExecutionsStatusesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementJobExecutionsStatusesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string EndTime,
    string StartTime,
    object Filter = null,
    string Id = null,
    string ManagedDatabaseGroupId = null,
    string ManagedDatabaseId = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#compartment_id DataOciDatabaseManagementJobExecutionsStatuses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#end_time DataOciDatabaseManagementJobExecutionsStatuses#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#start_time DataOciDatabaseManagementJobExecutionsStatuses#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#id DataOciDatabaseManagementJobExecutionsStatuses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseGroupId">ManagedDatabaseGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#compartment_id DataOciDatabaseManagementJobExecutionsStatuses#compartment_id}.

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#end_time DataOciDatabaseManagementJobExecutionsStatuses#end_time}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#start_time DataOciDatabaseManagementJobExecutionsStatuses#start_time}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#filter DataOciDatabaseManagementJobExecutionsStatuses#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#id DataOciDatabaseManagementJobExecutionsStatuses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedDatabaseGroupId`<sup>Optional</sup> <a name="ManagedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseGroupId"></a>

```csharp
public string ManagedDatabaseGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_group_id}.

---

##### `ManagedDatabaseId`<sup>Optional</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}.

---

### DataOciDatabaseManagementJobExecutionsStatusesFilter <a name="DataOciDatabaseManagementJobExecutionsStatusesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementJobExecutionsStatusesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#values DataOciDatabaseManagementJobExecutionsStatuses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#regex DataOciDatabaseManagementJobExecutionsStatuses#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#values DataOciDatabaseManagementJobExecutionsStatuses#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#regex DataOciDatabaseManagementJobExecutionsStatuses#regex}.

---

### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection {

};
```


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementJobExecutionsStatusesFilterList <a name="DataOciDatabaseManagementJobExecutionsStatusesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementJobExecutionsStatusesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.get"></a>

```csharp
private DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference <a name="DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems</a>

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection</a>

---



