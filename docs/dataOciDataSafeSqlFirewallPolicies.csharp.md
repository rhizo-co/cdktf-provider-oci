# `dataOciDataSafeSqlFirewallPolicies` Submodule <a name="`dataOciDataSafeSqlFirewallPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallPolicies <a name="DataOciDataSafeSqlFirewallPolicies" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies oci_data_safe_sql_firewall_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallPolicies(Construct Scope, string Id, DataOciDataSafeSqlFirewallPoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig">DataOciDataSafeSqlFirewallPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig">DataOciDataSafeSqlFirewallPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetDbUserName">ResetDbUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetSecurityPolicyId">ResetSecurityPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetSqlFirewallPolicyId">ResetSqlFirewallPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetViolationAction">ResetViolationAction</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDbUserName` <a name="ResetDbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetDbUserName"></a>

```csharp
private void ResetDbUserName()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecurityPolicyId` <a name="ResetSecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetSecurityPolicyId"></a>

```csharp
private void ResetSecurityPolicyId()
```

##### `ResetSqlFirewallPolicyId` <a name="ResetSqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetSqlFirewallPolicyId"></a>

```csharp
private void ResetSqlFirewallPolicyId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetTimeCreatedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetTimeCreatedLessThan"></a>

```csharp
private void ResetTimeCreatedLessThan()
```

##### `ResetViolationAction` <a name="ResetViolationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetViolationAction"></a>

```csharp
private void ResetViolationAction()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSqlFirewallPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSqlFirewallPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSqlFirewallPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList">DataOciDataSafeSqlFirewallPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyCollection">SqlFirewallPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dbUserNameInput">DbUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.securityPolicyIdInput">SecurityPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyIdInput">SqlFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.violationActionInput">ViolationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dbUserName">DbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.securityPolicyId">SecurityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.violationAction">ViolationAction</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.filter"></a>

```csharp
public DataOciDataSafeSqlFirewallPoliciesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList">DataOciDataSafeSqlFirewallPoliciesFilterList</a>

---

##### `SqlFirewallPolicyCollection`<sup>Required</sup> <a name="SqlFirewallPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyCollection"></a>

```csharp
public DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList SqlFirewallPolicyCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DbUserNameInput`<sup>Optional</sup> <a name="DbUserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dbUserNameInput"></a>

```csharp
public string DbUserNameInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyIdInput`<sup>Optional</sup> <a name="SecurityPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.securityPolicyIdInput"></a>

```csharp
public string SecurityPolicyIdInput { get; }
```

- *Type:* string

---

##### `SqlFirewallPolicyIdInput`<sup>Optional</sup> <a name="SqlFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyIdInput"></a>

```csharp
public string SqlFirewallPolicyIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedLessThanInput"></a>

```csharp
public string TimeCreatedLessThanInput { get; }
```

- *Type:* string

---

##### `ViolationActionInput`<sup>Optional</sup> <a name="ViolationActionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.violationActionInput"></a>

```csharp
public string ViolationActionInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dbUserName"></a>

```csharp
public string DbUserName { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.securityPolicyId"></a>

```csharp
public string SecurityPolicyId { get; }
```

- *Type:* string

---

##### `SqlFirewallPolicyId`<sup>Required</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyId"></a>

```csharp
public string SqlFirewallPolicyId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; }
```

- *Type:* string

---

##### `ViolationAction`<sup>Required</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.violationAction"></a>

```csharp
public string ViolationAction { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallPoliciesConfig <a name="DataOciDataSafeSqlFirewallPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallPoliciesConfig {
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
    string DbUserName = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string SecurityPolicyId = null,
    string SqlFirewallPolicyId = null,
    string State = null,
    string TimeCreatedGreaterThanOrEqualTo = null,
    string TimeCreatedLessThan = null,
    string ViolationAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#compartment_id DataOciDataSafeSqlFirewallPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#access_level DataOciDataSafeSqlFirewallPolicies#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicies#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.dbUserName">DbUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#db_user_name DataOciDataSafeSqlFirewallPolicies#db_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#display_name DataOciDataSafeSqlFirewallPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#id DataOciDataSafeSqlFirewallPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.securityPolicyId">SecurityPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#security_policy_id DataOciDataSafeSqlFirewallPolicies#security_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#sql_firewall_policy_id DataOciDataSafeSqlFirewallPolicies#sql_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#state DataOciDataSafeSqlFirewallPolicies#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#time_created_greater_than_or_equal_to DataOciDataSafeSqlFirewallPolicies#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#time_created_less_than DataOciDataSafeSqlFirewallPolicies#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.violationAction">ViolationAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#violation_action DataOciDataSafeSqlFirewallPolicies#violation_action}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#compartment_id DataOciDataSafeSqlFirewallPolicies#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#access_level DataOciDataSafeSqlFirewallPolicies#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicies#compartment_id_in_subtree}.

---

##### `DbUserName`<sup>Optional</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.dbUserName"></a>

```csharp
public string DbUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#db_user_name DataOciDataSafeSqlFirewallPolicies#db_user_name}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#display_name DataOciDataSafeSqlFirewallPolicies#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#filter DataOciDataSafeSqlFirewallPolicies#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#id DataOciDataSafeSqlFirewallPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityPolicyId`<sup>Optional</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.securityPolicyId"></a>

```csharp
public string SecurityPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#security_policy_id DataOciDataSafeSqlFirewallPolicies#security_policy_id}.

---

##### `SqlFirewallPolicyId`<sup>Optional</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.sqlFirewallPolicyId"></a>

```csharp
public string SqlFirewallPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#sql_firewall_policy_id DataOciDataSafeSqlFirewallPolicies#sql_firewall_policy_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#state DataOciDataSafeSqlFirewallPolicies#state}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#time_created_greater_than_or_equal_to DataOciDataSafeSqlFirewallPolicies#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#time_created_less_than DataOciDataSafeSqlFirewallPolicies#time_created_less_than}.

---

##### `ViolationAction`<sup>Optional</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.violationAction"></a>

```csharp
public string ViolationAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#violation_action DataOciDataSafeSqlFirewallPolicies#violation_action}.

---

### DataOciDataSafeSqlFirewallPoliciesFilter <a name="DataOciDataSafeSqlFirewallPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallPoliciesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#name DataOciDataSafeSqlFirewallPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#values DataOciDataSafeSqlFirewallPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#regex DataOciDataSafeSqlFirewallPolicies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#name DataOciDataSafeSqlFirewallPolicies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#values DataOciDataSafeSqlFirewallPolicies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#regex DataOciDataSafeSqlFirewallPolicies#regex}.

---

### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection {

};
```


### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallPoliciesFilterList <a name="DataOciDataSafeSqlFirewallPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallPoliciesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.get"></a>

```csharp
private DataOciDataSafeSqlFirewallPoliciesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSqlFirewallPoliciesFilterOutputReference <a name="DataOciDataSafeSqlFirewallPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallPoliciesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientIps">AllowedClientIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientOsUsernames">AllowedClientOsUsernames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientPrograms">AllowedClientPrograms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.dbUserName">DbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.enforcementScope">EnforcementScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.securityPolicyId">SecurityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.sqlLevel">SqlLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.violationAction">ViolationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.violationAudit">ViolationAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedClientIps`<sup>Required</sup> <a name="AllowedClientIps" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientIps"></a>

```csharp
public string[] AllowedClientIps { get; }
```

- *Type:* string[]

---

##### `AllowedClientOsUsernames`<sup>Required</sup> <a name="AllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientOsUsernames"></a>

```csharp
public string[] AllowedClientOsUsernames { get; }
```

- *Type:* string[]

---

##### `AllowedClientPrograms`<sup>Required</sup> <a name="AllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientPrograms"></a>

```csharp
public string[] AllowedClientPrograms { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.dbUserName"></a>

```csharp
public string DbUserName { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnforcementScope`<sup>Required</sup> <a name="EnforcementScope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.enforcementScope"></a>

```csharp
public string EnforcementScope { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.securityPolicyId"></a>

```csharp
public string SecurityPolicyId { get; }
```

- *Type:* string

---

##### `SqlFirewallPolicyId`<sup>Required</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.sqlFirewallPolicyId"></a>

```csharp
public string SqlFirewallPolicyId { get; }
```

- *Type:* string

---

##### `SqlLevel`<sup>Required</sup> <a name="SqlLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.sqlLevel"></a>

```csharp
public string SqlLevel { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ViolationAction`<sup>Required</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.violationAction"></a>

```csharp
public string ViolationAction { get; }
```

- *Type:* string

---

##### `ViolationAudit`<sup>Required</sup> <a name="ViolationAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.violationAudit"></a>

```csharp
public string ViolationAudit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems</a>

---


### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.get"></a>

```csharp
private DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection</a>

---



