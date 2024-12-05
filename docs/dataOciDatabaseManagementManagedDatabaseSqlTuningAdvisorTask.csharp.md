# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task oci_database_management_managed_database_sql_tuning_advisor_task}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetTimeGreaterThanOrEqualTo">ResetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetTimeLessThanOrEqualTo">ResetTimeLessThanOrEqualTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeGreaterThanOrEqualTo` <a name="ResetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetTimeGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeGreaterThanOrEqualTo()
```

##### `ResetTimeLessThanOrEqualTo` <a name="ResetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.resetTimeLessThanOrEqualTo"></a>

```csharp
private void ResetTimeLessThanOrEqualTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.timeGreaterThanOrEqualToInput">TimeGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.timeLessThanOrEqualToInput">TimeLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.timeGreaterThanOrEqualToInput"></a>

```csharp
public string TimeGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="TimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.timeLessThanOrEqualToInput"></a>

```csharp
public string TimeLessThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.timeGreaterThanOrEqualTo"></a>

```csharp
public string TimeGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeLessThanOrEqualTo`<sup>Required</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.timeLessThanOrEqualTo"></a>

```csharp
public string TimeLessThanOrEqualTo { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
    string Id = null,
    string Name = null,
    string Status = null,
    string TimeGreaterThanOrEqualTo = null,
    string TimeLessThanOrEqualTo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#time_less_than_or_equal_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#managed_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#status}.

---

##### `TimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.timeGreaterThanOrEqualTo"></a>

```csharp
public string TimeGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#time_greater_than_or_equal_to}.

---

##### `TimeLessThanOrEqualTo`<sup>Optional</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskConfig.property.timeLessThanOrEqualTo"></a>

```csharp
public string TimeLessThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_task#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask#time_less_than_or_equal_to}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.daysToExpire">DaysToExpire</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.instanceId">InstanceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.recommendationCount">RecommendationCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.sqlTuningAdvisorTaskId">SqlTuningAdvisorTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.taskStatus">TaskStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.timeExecutionEnded">TimeExecutionEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.timeExecutionStarted">TimeExecutionStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.totalSqlStatements">TotalSqlStatements</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysToExpire`<sup>Required</sup> <a name="DaysToExpire" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.daysToExpire"></a>

```csharp
public double DaysToExpire { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.instanceId"></a>

```csharp
public double InstanceId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `RecommendationCount`<sup>Required</sup> <a name="RecommendationCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.recommendationCount"></a>

```csharp
public double RecommendationCount { get; }
```

- *Type:* double

---

##### `SqlTuningAdvisorTaskId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```csharp
public string SqlTuningAdvisorTaskId { get; }
```

- *Type:* string

---

##### `TaskStatus`<sup>Required</sup> <a name="TaskStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.taskStatus"></a>

```csharp
public string TaskStatus { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeExecutionEnded`<sup>Required</sup> <a name="TimeExecutionEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.timeExecutionEnded"></a>

```csharp
public string TimeExecutionEnded { get; }
```

- *Type:* string

---

##### `TimeExecutionStarted`<sup>Required</sup> <a name="TimeExecutionStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.timeExecutionStarted"></a>

```csharp
public string TimeExecutionStarted { get; }
```

- *Type:* string

---

##### `TotalSqlStatements`<sup>Required</sup> <a name="TotalSqlStatements" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.totalSqlStatements"></a>

```csharp
public double TotalSqlStatements { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTask.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTaskItems</a>

---



