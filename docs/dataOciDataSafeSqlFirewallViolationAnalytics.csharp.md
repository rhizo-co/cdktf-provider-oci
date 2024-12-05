# `dataOciDataSafeSqlFirewallViolationAnalytics` Submodule <a name="`dataOciDataSafeSqlFirewallViolationAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallViolationAnalytics <a name="DataOciDataSafeSqlFirewallViolationAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics oci_data_safe_sql_firewall_violation_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalytics(Construct Scope, string Id, DataOciDataSafeSqlFirewallViolationAnalyticsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig">DataOciDataSafeSqlFirewallViolationAnalyticsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig">DataOciDataSafeSqlFirewallViolationAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetQueryTimeZone">ResetQueryTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetScimQuery">ResetScimQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetSummaryField">ResetSummaryField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeEnded">ResetTimeEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeStarted">ResetTimeStarted</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetQueryTimeZone` <a name="ResetQueryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetQueryTimeZone"></a>

```csharp
private void ResetQueryTimeZone()
```

##### `ResetScimQuery` <a name="ResetScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetScimQuery"></a>

```csharp
private void ResetScimQuery()
```

##### `ResetSummaryField` <a name="ResetSummaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetSummaryField"></a>

```csharp
private void ResetSummaryField()
```

##### `ResetTimeEnded` <a name="ResetTimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeEnded"></a>

```csharp
private void ResetTimeEnded()
```

##### `ResetTimeStarted` <a name="ResetTimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeStarted"></a>

```csharp
private void ResetTimeStarted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallViolationAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallViolationAnalytics.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallViolationAnalytics.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallViolationAnalytics.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallViolationAnalytics.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallViolationAnalytics resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSqlFirewallViolationAnalytics to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSqlFirewallViolationAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallViolationAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList">DataOciDataSafeSqlFirewallViolationAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.sqlFirewallViolationAnalyticsCollection">SqlFirewallViolationAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupByInput">GroupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZoneInput">QueryTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQueryInput">ScimQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryFieldInput">SummaryFieldInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEndedInput">TimeEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStartedInput">TimeStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupBy">GroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZone">QueryTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQuery">ScimQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryField">SummaryField</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filter"></a>

```csharp
public DataOciDataSafeSqlFirewallViolationAnalyticsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList">DataOciDataSafeSqlFirewallViolationAnalyticsFilterList</a>

---

##### `SqlFirewallViolationAnalyticsCollection`<sup>Required</sup> <a name="SqlFirewallViolationAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.sqlFirewallViolationAnalyticsCollection"></a>

```csharp
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList SqlFirewallViolationAnalyticsCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupByInput"></a>

```csharp
public string[] GroupByInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QueryTimeZoneInput`<sup>Optional</sup> <a name="QueryTimeZoneInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZoneInput"></a>

```csharp
public string QueryTimeZoneInput { get; }
```

- *Type:* string

---

##### `ScimQueryInput`<sup>Optional</sup> <a name="ScimQueryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQueryInput"></a>

```csharp
public string ScimQueryInput { get; }
```

- *Type:* string

---

##### `SummaryFieldInput`<sup>Optional</sup> <a name="SummaryFieldInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryFieldInput"></a>

```csharp
public string[] SummaryFieldInput { get; }
```

- *Type:* string[]

---

##### `TimeEndedInput`<sup>Optional</sup> <a name="TimeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEndedInput"></a>

```csharp
public string TimeEndedInput { get; }
```

- *Type:* string

---

##### `TimeStartedInput`<sup>Optional</sup> <a name="TimeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStartedInput"></a>

```csharp
public string TimeStartedInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupBy"></a>

```csharp
public string[] GroupBy { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QueryTimeZone`<sup>Required</sup> <a name="QueryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZone"></a>

```csharp
public string QueryTimeZone { get; }
```

- *Type:* string

---

##### `ScimQuery`<sup>Required</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQuery"></a>

```csharp
public string ScimQuery { get; }
```

- *Type:* string

---

##### `SummaryField`<sup>Required</sup> <a name="SummaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryField"></a>

```csharp
public string[] SummaryField { get; }
```

- *Type:* string[]

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallViolationAnalyticsConfig <a name="DataOciDataSafeSqlFirewallViolationAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AccessLevel = null,
    object CompartmentIdInSubtree = null,
    object Filter = null,
    string[] GroupBy = null,
    string Id = null,
    string QueryTimeZone = null,
    string ScimQuery = null,
    string[] SummaryField = null,
    string TimeEnded = null,
    string TimeStarted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#access_level DataOciDataSafeSqlFirewallViolationAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.groupBy">GroupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#group_by DataOciDataSafeSqlFirewallViolationAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#id DataOciDataSafeSqlFirewallViolationAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.queryTimeZone">QueryTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#query_time_zone DataOciDataSafeSqlFirewallViolationAnalytics#query_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.scimQuery">ScimQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#scim_query DataOciDataSafeSqlFirewallViolationAnalytics#scim_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.summaryField">SummaryField</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#summary_field DataOciDataSafeSqlFirewallViolationAnalytics#summary_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeEnded">TimeEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_ended DataOciDataSafeSqlFirewallViolationAnalytics#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeStarted">TimeStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_started DataOciDataSafeSqlFirewallViolationAnalytics#time_started}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#access_level DataOciDataSafeSqlFirewallViolationAnalytics#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#filter DataOciDataSafeSqlFirewallViolationAnalytics#filter}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.groupBy"></a>

```csharp
public string[] GroupBy { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#group_by DataOciDataSafeSqlFirewallViolationAnalytics#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#id DataOciDataSafeSqlFirewallViolationAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QueryTimeZone`<sup>Optional</sup> <a name="QueryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.queryTimeZone"></a>

```csharp
public string QueryTimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#query_time_zone DataOciDataSafeSqlFirewallViolationAnalytics#query_time_zone}.

---

##### `ScimQuery`<sup>Optional</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.scimQuery"></a>

```csharp
public string ScimQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#scim_query DataOciDataSafeSqlFirewallViolationAnalytics#scim_query}.

---

##### `SummaryField`<sup>Optional</sup> <a name="SummaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.summaryField"></a>

```csharp
public string[] SummaryField { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#summary_field DataOciDataSafeSqlFirewallViolationAnalytics#summary_field}.

---

##### `TimeEnded`<sup>Optional</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeEnded"></a>

```csharp
public string TimeEnded { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_ended DataOciDataSafeSqlFirewallViolationAnalytics#time_ended}.

---

##### `TimeStarted`<sup>Optional</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeStarted"></a>

```csharp
public string TimeStarted { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_started DataOciDataSafeSqlFirewallViolationAnalytics#time_started}.

---

### DataOciDataSafeSqlFirewallViolationAnalyticsFilter <a name="DataOciDataSafeSqlFirewallViolationAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#name DataOciDataSafeSqlFirewallViolationAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#values DataOciDataSafeSqlFirewallViolationAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#regex DataOciDataSafeSqlFirewallViolationAnalytics#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#name DataOciDataSafeSqlFirewallViolationAnalytics#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#values DataOciDataSafeSqlFirewallViolationAnalytics#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#regex DataOciDataSafeSqlFirewallViolationAnalytics#regex}.

---

### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection {

};
```


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems {

};
```


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallViolationAnalyticsFilterList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.get"></a>

```csharp
private DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.get"></a>

```csharp
private DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientIp">ClientIp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientOsUserName">ClientOsUserName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientProgram">ClientProgram</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName">DbUserName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operation">Operation</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operationTime">OperationTime</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel">SqlLevel</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetId">TargetId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetName">TargetName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction">ViolationAction</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationCause">ViolationCause</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIp`<sup>Required</sup> <a name="ClientIp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientIp"></a>

```csharp
public string[] ClientIp { get; }
```

- *Type:* string[]

---

##### `ClientOsUserName`<sup>Required</sup> <a name="ClientOsUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientOsUserName"></a>

```csharp
public string[] ClientOsUserName { get; }
```

- *Type:* string[]

---

##### `ClientProgram`<sup>Required</sup> <a name="ClientProgram" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientProgram"></a>

```csharp
public string[] ClientProgram { get; }
```

- *Type:* string[]

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName"></a>

```csharp
public string[] DbUserName { get; }
```

- *Type:* string[]

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operation"></a>

```csharp
public string[] Operation { get; }
```

- *Type:* string[]

---

##### `OperationTime`<sup>Required</sup> <a name="OperationTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operationTime"></a>

```csharp
public string[] OperationTime { get; }
```

- *Type:* string[]

---

##### `SqlLevel`<sup>Required</sup> <a name="SqlLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel"></a>

```csharp
public string[] SqlLevel { get; }
```

- *Type:* string[]

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetId"></a>

```csharp
public string[] TargetId { get; }
```

- *Type:* string[]

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetName"></a>

```csharp
public string[] TargetName { get; }
```

- *Type:* string[]

---

##### `ViolationAction`<sup>Required</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction"></a>

```csharp
public string[] ViolationAction { get; }
```

- *Type:* string[]

---

##### `ViolationCause`<sup>Required</sup> <a name="ViolationCause" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationCause"></a>

```csharp
public string[] ViolationCause { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.sqlFirewallViolationAnalyticCount">SqlFirewallViolationAnalyticCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```csharp
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList Dimensions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `SqlFirewallViolationAnalyticCount`<sup>Required</sup> <a name="SqlFirewallViolationAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.sqlFirewallViolationAnalyticCount"></a>

```csharp
public string SqlFirewallViolationAnalyticCount { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.get"></a>

```csharp
private DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection</a>

---



