# `dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines oci_database_management_managed_database_sql_plan_baselines}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAccepted">ResetIsAccepted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAdaptive">ResetIsAdaptive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAutoPurged">ResetIsAutoPurged</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsFixed">ResetIsFixed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsNeverExecuted">ResetIsNeverExecuted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsReproduced">ResetIsReproduced</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetPlanName">ResetPlanName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlHandle">ResetSqlHandle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlText">ResetSqlText</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAccepted` <a name="ResetIsAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAccepted"></a>

```csharp
private void ResetIsAccepted()
```

##### `ResetIsAdaptive` <a name="ResetIsAdaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAdaptive"></a>

```csharp
private void ResetIsAdaptive()
```

##### `ResetIsAutoPurged` <a name="ResetIsAutoPurged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAutoPurged"></a>

```csharp
private void ResetIsAutoPurged()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetIsFixed` <a name="ResetIsFixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsFixed"></a>

```csharp
private void ResetIsFixed()
```

##### `ResetIsNeverExecuted` <a name="ResetIsNeverExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsNeverExecuted"></a>

```csharp
private void ResetIsNeverExecuted()
```

##### `ResetIsReproduced` <a name="ResetIsReproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsReproduced"></a>

```csharp
private void ResetIsReproduced()
```

##### `ResetLimit` <a name="ResetLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOpcNamedCredentialId"></a>

```csharp
private void ResetOpcNamedCredentialId()
```

##### `ResetOrigin` <a name="ResetOrigin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOrigin"></a>

```csharp
private void ResetOrigin()
```

##### `ResetPlanName` <a name="ResetPlanName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetPlanName"></a>

```csharp
private void ResetPlanName()
```

##### `ResetSqlHandle` <a name="ResetSqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlHandle"></a>

```csharp
private void ResetSqlHandle()
```

##### `ResetSqlText` <a name="ResetSqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlText"></a>

```csharp
private void ResetSqlText()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlPlanBaselineCollection">SqlPlanBaselineCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAcceptedInput">IsAcceptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptiveInput">IsAdaptiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurgedInput">IsAutoPurgedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixedInput">IsFixedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecutedInput">IsNeverExecutedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproducedInput">IsReproducedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.originInput">OriginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planNameInput">PlanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandleInput">SqlHandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlTextInput">SqlTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAccepted">IsAccepted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptive">IsAdaptive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurged">IsAutoPurged</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixed">IsFixed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecuted">IsNeverExecuted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproduced">IsReproduced</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planName">PlanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandle">SqlHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlText">SqlText</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filter"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList</a>

---

##### `SqlPlanBaselineCollection`<sup>Required</sup> <a name="SqlPlanBaselineCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlPlanBaselineCollection"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList SqlPlanBaselineCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAcceptedInput`<sup>Optional</sup> <a name="IsAcceptedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAcceptedInput"></a>

```csharp
public object IsAcceptedInput { get; }
```

- *Type:* object

---

##### `IsAdaptiveInput`<sup>Optional</sup> <a name="IsAdaptiveInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptiveInput"></a>

```csharp
public object IsAdaptiveInput { get; }
```

- *Type:* object

---

##### `IsAutoPurgedInput`<sup>Optional</sup> <a name="IsAutoPurgedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurgedInput"></a>

```csharp
public object IsAutoPurgedInput { get; }
```

- *Type:* object

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsFixedInput`<sup>Optional</sup> <a name="IsFixedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixedInput"></a>

```csharp
public object IsFixedInput { get; }
```

- *Type:* object

---

##### `IsNeverExecutedInput`<sup>Optional</sup> <a name="IsNeverExecutedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecutedInput"></a>

```csharp
public object IsNeverExecutedInput { get; }
```

- *Type:* object

---

##### `IsReproducedInput`<sup>Optional</sup> <a name="IsReproducedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproducedInput"></a>

```csharp
public object IsReproducedInput { get; }
```

- *Type:* object

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialIdInput"></a>

```csharp
public string OpcNamedCredentialIdInput { get; }
```

- *Type:* string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.originInput"></a>

```csharp
public string OriginInput { get; }
```

- *Type:* string

---

##### `PlanNameInput`<sup>Optional</sup> <a name="PlanNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planNameInput"></a>

```csharp
public string PlanNameInput { get; }
```

- *Type:* string

---

##### `SqlHandleInput`<sup>Optional</sup> <a name="SqlHandleInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandleInput"></a>

```csharp
public string SqlHandleInput { get; }
```

- *Type:* string

---

##### `SqlTextInput`<sup>Optional</sup> <a name="SqlTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlTextInput"></a>

```csharp
public string SqlTextInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAccepted`<sup>Required</sup> <a name="IsAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAccepted"></a>

```csharp
public object IsAccepted { get; }
```

- *Type:* object

---

##### `IsAdaptive`<sup>Required</sup> <a name="IsAdaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptive"></a>

```csharp
public object IsAdaptive { get; }
```

- *Type:* object

---

##### `IsAutoPurged`<sup>Required</sup> <a name="IsAutoPurged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurged"></a>

```csharp
public object IsAutoPurged { get; }
```

- *Type:* object

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `IsFixed`<sup>Required</sup> <a name="IsFixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixed"></a>

```csharp
public object IsFixed { get; }
```

- *Type:* object

---

##### `IsNeverExecuted`<sup>Required</sup> <a name="IsNeverExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecuted"></a>

```csharp
public object IsNeverExecuted { get; }
```

- *Type:* object

---

##### `IsReproduced`<sup>Required</sup> <a name="IsReproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproduced"></a>

```csharp
public object IsReproduced { get; }
```

- *Type:* object

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `PlanName`<sup>Required</sup> <a name="PlanName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planName"></a>

```csharp
public string PlanName { get; }
```

- *Type:* string

---

##### `SqlHandle`<sup>Required</sup> <a name="SqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandle"></a>

```csharp
public string SqlHandle { get; }
```

- *Type:* string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlText"></a>

```csharp
public string SqlText { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
    object Filter = null,
    string Id = null,
    object IsAccepted = null,
    object IsAdaptive = null,
    object IsAutoPurged = null,
    object IsEnabled = null,
    object IsFixed = null,
    object IsNeverExecuted = null,
    object IsReproduced = null,
    double Limit = null,
    string OpcNamedCredentialId = null,
    string Origin = null,
    string PlanName = null,
    string SqlHandle = null,
    string SqlText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAccepted">IsAccepted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_accepted DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_accepted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAdaptive">IsAdaptive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_adaptive DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_adaptive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAutoPurged">IsAutoPurged</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_auto_purged DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_auto_purged}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_enabled DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isFixed">IsFixed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_fixed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_fixed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isNeverExecuted">IsNeverExecuted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_never_executed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_never_executed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isReproduced">IsReproduced</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_reproduced DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_reproduced}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.limit">Limit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#limit DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.origin">Origin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#origin DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#origin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.planName">PlanName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#plan_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlHandle">SqlHandle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_handle DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_handle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlText">SqlText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_text DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_text}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#managed_database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#filter DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAccepted`<sup>Optional</sup> <a name="IsAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAccepted"></a>

```csharp
public object IsAccepted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_accepted DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_accepted}.

---

##### `IsAdaptive`<sup>Optional</sup> <a name="IsAdaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAdaptive"></a>

```csharp
public object IsAdaptive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_adaptive DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_adaptive}.

---

##### `IsAutoPurged`<sup>Optional</sup> <a name="IsAutoPurged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAutoPurged"></a>

```csharp
public object IsAutoPurged { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_auto_purged DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_auto_purged}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_enabled DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_enabled}.

---

##### `IsFixed`<sup>Optional</sup> <a name="IsFixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isFixed"></a>

```csharp
public object IsFixed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_fixed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_fixed}.

---

##### `IsNeverExecuted`<sup>Optional</sup> <a name="IsNeverExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isNeverExecuted"></a>

```csharp
public object IsNeverExecuted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_never_executed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_never_executed}.

---

##### `IsReproduced`<sup>Optional</sup> <a name="IsReproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isReproduced"></a>

```csharp
public object IsReproduced { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_reproduced DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_reproduced}.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#limit DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#limit}.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#opc_named_credential_id}.

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.origin"></a>

```csharp
public string Origin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#origin DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#origin}.

---

##### `PlanName`<sup>Optional</sup> <a name="PlanName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.planName"></a>

```csharp
public string PlanName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#plan_name}.

---

##### `SqlHandle`<sup>Optional</sup> <a name="SqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlHandle"></a>

```csharp
public string SqlHandle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_handle DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_handle}.

---

##### `SqlText`<sup>Optional</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlText"></a>

```csharp
public string SqlText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_text DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_text}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection {

};
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.accepted">Accepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.adaptive">Adaptive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.autoPurge">AutoPurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.enabled">Enabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.executionPlan">ExecutionPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fixed">Fixed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.module">Module</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.planName">PlanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.reproduced">Reproduced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlHandle">SqlHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlText">SqlText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastExecuted">TimeLastExecuted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastModified">TimeLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accepted`<sup>Required</sup> <a name="Accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.accepted"></a>

```csharp
public string Accepted { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Adaptive`<sup>Required</sup> <a name="Adaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.adaptive"></a>

```csharp
public string Adaptive { get; }
```

- *Type:* string

---

##### `AutoPurge`<sup>Required</sup> <a name="AutoPurge" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.autoPurge"></a>

```csharp
public string AutoPurge { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.enabled"></a>

```csharp
public string Enabled { get; }
```

- *Type:* string

---

##### `ExecutionPlan`<sup>Required</sup> <a name="ExecutionPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.executionPlan"></a>

```csharp
public string ExecutionPlan { get; }
```

- *Type:* string

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fixed"></a>

```csharp
public string Fixed { get; }
```

- *Type:* string

---

##### `Module`<sup>Required</sup> <a name="Module" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.module"></a>

```csharp
public string Module { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `PlanName`<sup>Required</sup> <a name="PlanName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.planName"></a>

```csharp
public string PlanName { get; }
```

- *Type:* string

---

##### `Reproduced`<sup>Required</sup> <a name="Reproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.reproduced"></a>

```csharp
public string Reproduced { get; }
```

- *Type:* string

---

##### `SqlHandle`<sup>Required</sup> <a name="SqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlHandle"></a>

```csharp
public string SqlHandle { get; }
```

- *Type:* string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlText"></a>

```csharp
public string SqlText { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastExecuted`<sup>Required</sup> <a name="TimeLastExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastExecuted"></a>

```csharp
public string TimeLastExecuted { get; }
```

- *Type:* string

---

##### `TimeLastModified`<sup>Required</sup> <a name="TimeLastModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastModified"></a>

```csharp
public string TimeLastModified { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection</a>

---



