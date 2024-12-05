# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding oci_database_management_managed_database_sql_tuning_advisor_tasks_finding}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetBeginExecId">ResetBeginExecId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetEndExecId">ResetEndExecId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetFindingFilter">ResetFindingFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetIndexHashFilter">ResetIndexHashFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetSearchPeriod">ResetSearchPeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetStatsHashFilter">ResetStatsHashFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBeginExecId` <a name="ResetBeginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetBeginExecId"></a>

```csharp
private void ResetBeginExecId()
```

##### `ResetEndExecId` <a name="ResetEndExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetEndExecId"></a>

```csharp
private void ResetEndExecId()
```

##### `ResetFindingFilter` <a name="ResetFindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetFindingFilter"></a>

```csharp
private void ResetFindingFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndexHashFilter` <a name="ResetIndexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetIndexHashFilter"></a>

```csharp
private void ResetIndexHashFilter()
```

##### `ResetSearchPeriod` <a name="ResetSearchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetSearchPeriod"></a>

```csharp
private void ResetSearchPeriod()
```

##### `ResetStatsHashFilter` <a name="ResetStatsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetStatsHashFilter"></a>

```csharp
private void ResetStatsHashFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecIdInput">BeginExecIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecIdInput">EndExecIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilterInput">FindingFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilterInput">IndexHashFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriodInput">SearchPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskIdInput">SqlTuningAdvisorTaskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilterInput">StatsHashFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecId">BeginExecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecId">EndExecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilter">FindingFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilter">IndexHashFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriod">SearchPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskId">SqlTuningAdvisorTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilter">StatsHashFilter</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList</a>

---

##### `BeginExecIdInput`<sup>Optional</sup> <a name="BeginExecIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecIdInput"></a>

```csharp
public string BeginExecIdInput { get; }
```

- *Type:* string

---

##### `EndExecIdInput`<sup>Optional</sup> <a name="EndExecIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecIdInput"></a>

```csharp
public string EndExecIdInput { get; }
```

- *Type:* string

---

##### `FindingFilterInput`<sup>Optional</sup> <a name="FindingFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilterInput"></a>

```csharp
public string FindingFilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexHashFilterInput`<sup>Optional</sup> <a name="IndexHashFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilterInput"></a>

```csharp
public string IndexHashFilterInput { get; }
```

- *Type:* string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `SearchPeriodInput`<sup>Optional</sup> <a name="SearchPeriodInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriodInput"></a>

```csharp
public string SearchPeriodInput { get; }
```

- *Type:* string

---

##### `SqlTuningAdvisorTaskIdInput`<sup>Optional</sup> <a name="SqlTuningAdvisorTaskIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskIdInput"></a>

```csharp
public string SqlTuningAdvisorTaskIdInput { get; }
```

- *Type:* string

---

##### `StatsHashFilterInput`<sup>Optional</sup> <a name="StatsHashFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilterInput"></a>

```csharp
public string StatsHashFilterInput { get; }
```

- *Type:* string

---

##### `BeginExecId`<sup>Required</sup> <a name="BeginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecId"></a>

```csharp
public string BeginExecId { get; }
```

- *Type:* string

---

##### `EndExecId`<sup>Required</sup> <a name="EndExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecId"></a>

```csharp
public string EndExecId { get; }
```

- *Type:* string

---

##### `FindingFilter`<sup>Required</sup> <a name="FindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilter"></a>

```csharp
public string FindingFilter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexHashFilter`<sup>Required</sup> <a name="IndexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilter"></a>

```csharp
public string IndexHashFilter { get; }
```

- *Type:* string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `SearchPeriod`<sup>Required</sup> <a name="SearchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriod"></a>

```csharp
public string SearchPeriod { get; }
```

- *Type:* string

---

##### `SqlTuningAdvisorTaskId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskId"></a>

```csharp
public string SqlTuningAdvisorTaskId { get; }
```

- *Type:* string

---

##### `StatsHashFilter`<sup>Required</sup> <a name="StatsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilter"></a>

```csharp
public string StatsHashFilter { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
    string SqlTuningAdvisorTaskId,
    string BeginExecId = null,
    string EndExecId = null,
    string FindingFilter = null,
    string Id = null,
    string IndexHashFilter = null,
    string SearchPeriod = null,
    string StatsHashFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.sqlTuningAdvisorTaskId">SqlTuningAdvisorTaskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.beginExecId">BeginExecId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#begin_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.endExecId">EndExecId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#end_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.findingFilter">FindingFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#finding_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.indexHashFilter">IndexHashFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#index_hash_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.searchPeriod">SearchPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#search_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.statsHashFilter">StatsHashFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#stats_hash_filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#managed_database_id}.

---

##### `SqlTuningAdvisorTaskId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.sqlTuningAdvisorTaskId"></a>

```csharp
public string SqlTuningAdvisorTaskId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#sql_tuning_advisor_task_id}.

---

##### `BeginExecId`<sup>Optional</sup> <a name="BeginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.beginExecId"></a>

```csharp
public string BeginExecId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#begin_exec_id}.

---

##### `EndExecId`<sup>Optional</sup> <a name="EndExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.endExecId"></a>

```csharp
public string EndExecId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#end_exec_id}.

---

##### `FindingFilter`<sup>Optional</sup> <a name="FindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.findingFilter"></a>

```csharp
public string FindingFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#finding_filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexHashFilter`<sup>Optional</sup> <a name="IndexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.indexHashFilter"></a>

```csharp
public string IndexHashFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#index_hash_filter}.

---

##### `SearchPeriod`<sup>Optional</sup> <a name="SearchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.searchPeriod"></a>

```csharp
public string SearchPeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#search_period}.

---

##### `StatsHashFilter`<sup>Optional</sup> <a name="StatsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.statsHashFilter"></a>

```csharp
public string StatsHashFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#stats_hash_filter}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.dbTimeBenefit">DbTimeBenefit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isAlternativePlanFindingPresent">IsAlternativePlanFindingPresent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isErrorFindingPresent">IsErrorFindingPresent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isIndexFindingPresent">IsIndexFindingPresent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isMiscellaneousFindingPresent">IsMiscellaneousFindingPresent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isRestructureSqlFindingPresent">IsRestructureSqlFindingPresent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingImplemented">IsSqlProfileFindingImplemented</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingPresent">IsSqlProfileFindingPresent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isStatsFindingPresent">IsStatsFindingPresent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isTimeoutFindingPresent">IsTimeoutFindingPresent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.parsingSchema">ParsingSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.perExecutionPercentage">PerExecutionPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlKey">SqlKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlText">SqlText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskId">SqlTuningAdvisorTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectExecutionId">SqlTuningAdvisorTaskObjectExecutionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectId">SqlTuningAdvisorTaskObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbTimeBenefit`<sup>Required</sup> <a name="DbTimeBenefit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.dbTimeBenefit"></a>

```csharp
public double DbTimeBenefit { get; }
```

- *Type:* double

---

##### `IsAlternativePlanFindingPresent`<sup>Required</sup> <a name="IsAlternativePlanFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isAlternativePlanFindingPresent"></a>

```csharp
public IResolvable IsAlternativePlanFindingPresent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsErrorFindingPresent`<sup>Required</sup> <a name="IsErrorFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isErrorFindingPresent"></a>

```csharp
public IResolvable IsErrorFindingPresent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsIndexFindingPresent`<sup>Required</sup> <a name="IsIndexFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isIndexFindingPresent"></a>

```csharp
public IResolvable IsIndexFindingPresent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMiscellaneousFindingPresent`<sup>Required</sup> <a name="IsMiscellaneousFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isMiscellaneousFindingPresent"></a>

```csharp
public IResolvable IsMiscellaneousFindingPresent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRestructureSqlFindingPresent`<sup>Required</sup> <a name="IsRestructureSqlFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isRestructureSqlFindingPresent"></a>

```csharp
public IResolvable IsRestructureSqlFindingPresent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSqlProfileFindingImplemented`<sup>Required</sup> <a name="IsSqlProfileFindingImplemented" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingImplemented"></a>

```csharp
public IResolvable IsSqlProfileFindingImplemented { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSqlProfileFindingPresent`<sup>Required</sup> <a name="IsSqlProfileFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingPresent"></a>

```csharp
public IResolvable IsSqlProfileFindingPresent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsStatsFindingPresent`<sup>Required</sup> <a name="IsStatsFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isStatsFindingPresent"></a>

```csharp
public IResolvable IsStatsFindingPresent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsTimeoutFindingPresent`<sup>Required</sup> <a name="IsTimeoutFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isTimeoutFindingPresent"></a>

```csharp
public IResolvable IsTimeoutFindingPresent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ParsingSchema`<sup>Required</sup> <a name="ParsingSchema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.parsingSchema"></a>

```csharp
public string ParsingSchema { get; }
```

- *Type:* string

---

##### `PerExecutionPercentage`<sup>Required</sup> <a name="PerExecutionPercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.perExecutionPercentage"></a>

```csharp
public double PerExecutionPercentage { get; }
```

- *Type:* double

---

##### `SqlKey`<sup>Required</sup> <a name="SqlKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlKey"></a>

```csharp
public string SqlKey { get; }
```

- *Type:* string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlText"></a>

```csharp
public string SqlText { get; }
```

- *Type:* string

---

##### `SqlTuningAdvisorTaskId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```csharp
public string SqlTuningAdvisorTaskId { get; }
```

- *Type:* string

---

##### `SqlTuningAdvisorTaskObjectExecutionId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskObjectExecutionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectExecutionId"></a>

```csharp
public string SqlTuningAdvisorTaskObjectExecutionId { get; }
```

- *Type:* string

---

##### `SqlTuningAdvisorTaskObjectId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectId"></a>

```csharp
public string SqlTuningAdvisorTaskObjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems</a>

---



