# `dataOciDatabaseManagementManagedDatabaseAlertLogCount` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseAlertLogCount` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCount <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count oci_database_management_managed_database_alert_log_count}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCount(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig">DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig">DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetIsRegularExpression">ResetIsRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetLevelFilter">ResetLevelFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetLogSearchText">ResetLogSearchText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetTimeGreaterThanOrEqualTo">ResetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetTimeLessThanOrEqualTo">ResetTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetTypeFilter">ResetTypeFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsRegularExpression` <a name="ResetIsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetIsRegularExpression"></a>

```csharp
private void ResetIsRegularExpression()
```

##### `ResetLevelFilter` <a name="ResetLevelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetLevelFilter"></a>

```csharp
private void ResetLevelFilter()
```

##### `ResetLogSearchText` <a name="ResetLogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetLogSearchText"></a>

```csharp
private void ResetLogSearchText()
```

##### `ResetTimeGreaterThanOrEqualTo` <a name="ResetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetTimeGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeGreaterThanOrEqualTo()
```

##### `ResetTimeLessThanOrEqualTo` <a name="ResetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetTimeLessThanOrEqualTo"></a>

```csharp
private void ResetTimeLessThanOrEqualTo()
```

##### `ResetTypeFilter` <a name="ResetTypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.resetTypeFilter"></a>

```csharp
private void ResetTypeFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAlertLogCount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseAlertLogCount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseAlertLogCount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseAlertLogCount.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseAlertLogCount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAlertLogCount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAlertLogCount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseAlertLogCount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAlertLogCount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList">DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.groupByInput">GroupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.isRegularExpressionInput">IsRegularExpressionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.levelFilterInput">LevelFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.logSearchTextInput">LogSearchTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.timeGreaterThanOrEqualToInput">TimeGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.timeLessThanOrEqualToInput">TimeLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.typeFilterInput">TypeFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.groupBy">GroupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.isRegularExpression">IsRegularExpression</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.levelFilter">LevelFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.logSearchText">LogSearchText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.typeFilter">TypeFilter</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList">DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList</a>

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.groupByInput"></a>

```csharp
public string GroupByInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsRegularExpressionInput`<sup>Optional</sup> <a name="IsRegularExpressionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.isRegularExpressionInput"></a>

```csharp
public object IsRegularExpressionInput { get; }
```

- *Type:* object

---

##### `LevelFilterInput`<sup>Optional</sup> <a name="LevelFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.levelFilterInput"></a>

```csharp
public string LevelFilterInput { get; }
```

- *Type:* string

---

##### `LogSearchTextInput`<sup>Optional</sup> <a name="LogSearchTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.logSearchTextInput"></a>

```csharp
public string LogSearchTextInput { get; }
```

- *Type:* string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `TimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.timeGreaterThanOrEqualToInput"></a>

```csharp
public string TimeGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="TimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.timeLessThanOrEqualToInput"></a>

```csharp
public string TimeLessThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TypeFilterInput`<sup>Optional</sup> <a name="TypeFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.typeFilterInput"></a>

```csharp
public string TypeFilterInput { get; }
```

- *Type:* string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.groupBy"></a>

```csharp
public string GroupBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsRegularExpression`<sup>Required</sup> <a name="IsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.isRegularExpression"></a>

```csharp
public object IsRegularExpression { get; }
```

- *Type:* object

---

##### `LevelFilter`<sup>Required</sup> <a name="LevelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.levelFilter"></a>

```csharp
public string LevelFilter { get; }
```

- *Type:* string

---

##### `LogSearchText`<sup>Required</sup> <a name="LogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.logSearchText"></a>

```csharp
public string LogSearchText { get; }
```

- *Type:* string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `TimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.timeGreaterThanOrEqualTo"></a>

```csharp
public string TimeGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeLessThanOrEqualTo`<sup>Required</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.timeLessThanOrEqualTo"></a>

```csharp
public string TimeLessThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TypeFilter`<sup>Required</sup> <a name="TypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.typeFilter"></a>

```csharp
public string TypeFilter { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCount#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.groupBy">GroupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCount#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#id DataOciDatabaseManagementManagedDatabaseAlertLogCount#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.isRegularExpression">IsRegularExpression</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCount#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.levelFilter">LevelFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCount#level_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.logSearchText">LogSearchText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCount#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCount#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCount#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.typeFilter">TypeFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCount#type_filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCount#managed_database_id}.

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.groupBy"></a>

```csharp
public string GroupBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCount#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#id DataOciDatabaseManagementManagedDatabaseAlertLogCount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsRegularExpression`<sup>Optional</sup> <a name="IsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.isRegularExpression"></a>

```csharp
public object IsRegularExpression { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCount#is_regular_expression}.

---

##### `LevelFilter`<sup>Optional</sup> <a name="LevelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.levelFilter"></a>

```csharp
public string LevelFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCount#level_filter}.

---

##### `LogSearchText`<sup>Optional</sup> <a name="LogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.logSearchText"></a>

```csharp
public string LogSearchText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCount#log_search_text}.

---

##### `TimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.timeGreaterThanOrEqualTo"></a>

```csharp
public string TimeGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCount#time_greater_than_or_equal_to}.

---

##### `TimeLessThanOrEqualTo`<sup>Optional</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.timeLessThanOrEqualTo"></a>

```csharp
public string TimeLessThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCount#time_less_than_or_equal_to}.

---

##### `TypeFilter`<sup>Optional</sup> <a name="TypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig.property.typeFilter"></a>

```csharp
public string TypeFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_count#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCount#type_filter}.

---

### DataOciDatabaseManagementManagedDatabaseAlertLogCountItems <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItems">DataOciDatabaseManagementManagedDatabaseAlertLogCountItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseAlertLogCountItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCount.DataOciDatabaseManagementManagedDatabaseAlertLogCountItems">DataOciDatabaseManagementManagedDatabaseAlertLogCountItems</a>

---



