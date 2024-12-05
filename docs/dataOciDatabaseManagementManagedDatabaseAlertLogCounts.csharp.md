# `dataOciDatabaseManagementManagedDatabaseAlertLogCounts` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseAlertLogCounts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCounts <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCounts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts oci_database_management_managed_database_alert_log_counts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCounts(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig">DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig">DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetIsRegularExpression">ResetIsRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLevelFilter">ResetLevelFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLogSearchText">ResetLogSearchText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeGreaterThanOrEqualTo">ResetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeLessThanOrEqualTo">ResetTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTypeFilter">ResetTypeFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsRegularExpression` <a name="ResetIsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetIsRegularExpression"></a>

```csharp
private void ResetIsRegularExpression()
```

##### `ResetLevelFilter` <a name="ResetLevelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLevelFilter"></a>

```csharp
private void ResetLevelFilter()
```

##### `ResetLogSearchText` <a name="ResetLogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLogSearchText"></a>

```csharp
private void ResetLogSearchText()
```

##### `ResetTimeGreaterThanOrEqualTo` <a name="ResetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeGreaterThanOrEqualTo()
```

##### `ResetTimeLessThanOrEqualTo` <a name="ResetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeLessThanOrEqualTo"></a>

```csharp
private void ResetTimeLessThanOrEqualTo()
```

##### `ResetTypeFilter` <a name="ResetTypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTypeFilter"></a>

```csharp
private void ResetTypeFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAlertLogCounts resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseAlertLogCounts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseAlertLogCounts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseAlertLogCounts.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseAlertLogCounts.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAlertLogCounts resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAlertLogCounts to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseAlertLogCounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAlertLogCounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.alertLogCountsCollection">AlertLogCountsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupByInput">GroupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpressionInput">IsRegularExpressionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilterInput">LevelFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchTextInput">LogSearchTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualToInput">TimeGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualToInput">TimeLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilterInput">TypeFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupBy">GroupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpression">IsRegularExpression</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilter">LevelFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchText">LogSearchText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilter">TypeFilter</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AlertLogCountsCollection`<sup>Required</sup> <a name="AlertLogCountsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.alertLogCountsCollection"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList AlertLogCountsCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filter"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupByInput"></a>

```csharp
public string GroupByInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsRegularExpressionInput`<sup>Optional</sup> <a name="IsRegularExpressionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpressionInput"></a>

```csharp
public object IsRegularExpressionInput { get; }
```

- *Type:* object

---

##### `LevelFilterInput`<sup>Optional</sup> <a name="LevelFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilterInput"></a>

```csharp
public string LevelFilterInput { get; }
```

- *Type:* string

---

##### `LogSearchTextInput`<sup>Optional</sup> <a name="LogSearchTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchTextInput"></a>

```csharp
public string LogSearchTextInput { get; }
```

- *Type:* string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `TimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualToInput"></a>

```csharp
public string TimeGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="TimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualToInput"></a>

```csharp
public string TimeLessThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TypeFilterInput`<sup>Optional</sup> <a name="TypeFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilterInput"></a>

```csharp
public string TypeFilterInput { get; }
```

- *Type:* string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupBy"></a>

```csharp
public string GroupBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsRegularExpression`<sup>Required</sup> <a name="IsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpression"></a>

```csharp
public object IsRegularExpression { get; }
```

- *Type:* object

---

##### `LevelFilter`<sup>Required</sup> <a name="LevelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilter"></a>

```csharp
public string LevelFilter { get; }
```

- *Type:* string

---

##### `LogSearchText`<sup>Required</sup> <a name="LogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchText"></a>

```csharp
public string LogSearchText { get; }
```

- *Type:* string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `TimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualTo"></a>

```csharp
public string TimeGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeLessThanOrEqualTo`<sup>Required</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualTo"></a>

```csharp
public string TimeLessThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TypeFilter`<sup>Required</sup> <a name="TypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilter"></a>

```csharp
public string TypeFilter { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection {

};
```


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems {

};
```


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
    object Filter = null,
    string GroupBy = null,
    string Id = null,
    object IsRegularExpression = null,
    string LevelFilter = null,
    string LogSearchText = null,
    string TimeGreaterThanOrEqualTo = null,
    string TimeLessThanOrEqualTo = null,
    string TypeFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.groupBy">GroupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.isRegularExpression">IsRegularExpression</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.levelFilter">LevelFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.logSearchText">LogSearchText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.typeFilter">TypeFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#filter}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.groupBy"></a>

```csharp
public string GroupBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsRegularExpression`<sup>Optional</sup> <a name="IsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.isRegularExpression"></a>

```csharp
public object IsRegularExpression { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}.

---

##### `LevelFilter`<sup>Optional</sup> <a name="LevelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.levelFilter"></a>

```csharp
public string LevelFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}.

---

##### `LogSearchText`<sup>Optional</sup> <a name="LogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.logSearchText"></a>

```csharp
public string LogSearchText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}.

---

##### `TimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeGreaterThanOrEqualTo"></a>

```csharp
public string TimeGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}.

---

##### `TimeLessThanOrEqualTo`<sup>Optional</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeLessThanOrEqualTo"></a>

```csharp
public string TimeLessThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}.

---

##### `TypeFilter`<sup>Optional</sup> <a name="TypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.typeFilter"></a>

```csharp
public string TypeFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}.

---

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#name DataOciDatabaseManagementManagedDatabaseAlertLogCounts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#values DataOciDatabaseManagementManagedDatabaseAlertLogCounts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#regex DataOciDatabaseManagementManagedDatabaseAlertLogCounts#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#name DataOciDatabaseManagementManagedDatabaseAlertLogCounts#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#values DataOciDatabaseManagementManagedDatabaseAlertLogCounts#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#regex DataOciDatabaseManagementManagedDatabaseAlertLogCounts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



