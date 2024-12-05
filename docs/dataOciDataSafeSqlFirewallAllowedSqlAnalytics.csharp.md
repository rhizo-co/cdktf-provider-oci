# `dataOciDataSafeSqlFirewallAllowedSqlAnalytics` Submodule <a name="`dataOciDataSafeSqlFirewallAllowedSqlAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalytics <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics oci_data_safe_sql_firewall_allowed_sql_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalytics(Construct Scope, string Id, DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetScimQuery">ResetScimQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScimQuery` <a name="ResetScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetScimQuery"></a>

```csharp
private void ResetScimQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqlAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallAllowedSqlAnalytics.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallAllowedSqlAnalytics.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallAllowedSqlAnalytics.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallAllowedSqlAnalytics.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqlAnalytics resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSqlFirewallAllowedSqlAnalytics to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSqlFirewallAllowedSqlAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallAllowedSqlAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.sqlFirewallAllowedSqlAnalyticsCollection">SqlFirewallAllowedSqlAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupByInput">GroupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQueryInput">ScimQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupBy">GroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQuery">ScimQuery</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filter"></a>

```csharp
public DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList</a>

---

##### `SqlFirewallAllowedSqlAnalyticsCollection`<sup>Required</sup> <a name="SqlFirewallAllowedSqlAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.sqlFirewallAllowedSqlAnalyticsCollection"></a>

```csharp
public DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList SqlFirewallAllowedSqlAnalyticsCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupByInput"></a>

```csharp
public string[] GroupByInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ScimQueryInput`<sup>Optional</sup> <a name="ScimQueryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQueryInput"></a>

```csharp
public string ScimQueryInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupBy"></a>

```csharp
public string[] GroupBy { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScimQuery`<sup>Required</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQuery"></a>

```csharp
public string ScimQuery { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig {
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
    string ScimQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#access_level DataOciDataSafeSqlFirewallAllowedSqlAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.groupBy">GroupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#group_by DataOciDataSafeSqlFirewallAllowedSqlAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.scimQuery">ScimQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#scim_query DataOciDataSafeSqlFirewallAllowedSqlAnalytics#scim_query}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#access_level DataOciDataSafeSqlFirewallAllowedSqlAnalytics#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#filter DataOciDataSafeSqlFirewallAllowedSqlAnalytics#filter}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.groupBy"></a>

```csharp
public string[] GroupBy { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#group_by DataOciDataSafeSqlFirewallAllowedSqlAnalytics#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScimQuery`<sup>Optional</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.scimQuery"></a>

```csharp
public string ScimQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#scim_query DataOciDataSafeSqlFirewallAllowedSqlAnalytics#scim_query}.

---

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#name DataOciDataSafeSqlFirewallAllowedSqlAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#values DataOciDataSafeSqlFirewallAllowedSqlAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#regex DataOciDataSafeSqlFirewallAllowedSqlAnalytics#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#name DataOciDataSafeSqlFirewallAllowedSqlAnalytics#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#values DataOciDataSafeSqlFirewallAllowedSqlAnalytics#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#regex DataOciDataSafeSqlFirewallAllowedSqlAnalytics#regex}.

---

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection {

};
```


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems {

};
```


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get"></a>

```csharp
private DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get"></a>

```csharp
private DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName">DbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel">SqlLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName"></a>

```csharp
public string DbUserName { get; }
```

- *Type:* string

---

##### `SqlFirewallPolicyId`<sup>Required</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlFirewallPolicyId"></a>

```csharp
public string SqlFirewallPolicyId { get; }
```

- *Type:* string

---

##### `SqlLevel`<sup>Required</sup> <a name="SqlLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel"></a>

```csharp
public string SqlLevel { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.sqlFirewallAllowedSqlAnalyticCount">SqlFirewallAllowedSqlAnalyticCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```csharp
public DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList Dimensions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList</a>

---

##### `SqlFirewallAllowedSqlAnalyticCount`<sup>Required</sup> <a name="SqlFirewallAllowedSqlAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.sqlFirewallAllowedSqlAnalyticCount"></a>

```csharp
public string SqlFirewallAllowedSqlAnalyticCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get"></a>

```csharp
private DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection</a>

---



