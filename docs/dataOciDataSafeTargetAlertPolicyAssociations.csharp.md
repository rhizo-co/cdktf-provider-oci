# `dataOciDataSafeTargetAlertPolicyAssociations` Submodule <a name="`dataOciDataSafeTargetAlertPolicyAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetAlertPolicyAssociations <a name="DataOciDataSafeTargetAlertPolicyAssociations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations oci_data_safe_target_alert_policy_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetAlertPolicyAssociations(Construct Scope, string Id, DataOciDataSafeTargetAlertPolicyAssociationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig">DataOciDataSafeTargetAlertPolicyAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig">DataOciDataSafeTargetAlertPolicyAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAlertPolicyId">ResetAlertPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetAlertPolicyAssociationId">ResetTargetAlertPolicyAssociationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetAlertPolicyId` <a name="ResetAlertPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAlertPolicyId"></a>

```csharp
private void ResetAlertPolicyId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTargetAlertPolicyAssociationId` <a name="ResetTargetAlertPolicyAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetAlertPolicyAssociationId"></a>

```csharp
private void ResetTargetAlertPolicyAssociationId()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedLessThan"></a>

```csharp
private void ResetTimeCreatedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetAlertPolicyAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeTargetAlertPolicyAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeTargetAlertPolicyAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeTargetAlertPolicyAssociations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeTargetAlertPolicyAssociations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeTargetAlertPolicyAssociations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeTargetAlertPolicyAssociations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeTargetAlertPolicyAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetAlertPolicyAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList">DataOciDataSafeTargetAlertPolicyAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationCollection">TargetAlertPolicyAssociationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyIdInput">AlertPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationIdInput">TargetAlertPolicyAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyId">AlertPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationId">TargetAlertPolicyAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filter"></a>

```csharp
public DataOciDataSafeTargetAlertPolicyAssociationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList">DataOciDataSafeTargetAlertPolicyAssociationsFilterList</a>

---

##### `TargetAlertPolicyAssociationCollection`<sup>Required</sup> <a name="TargetAlertPolicyAssociationCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationCollection"></a>

```csharp
public DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList TargetAlertPolicyAssociationCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `AlertPolicyIdInput`<sup>Optional</sup> <a name="AlertPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyIdInput"></a>

```csharp
public string AlertPolicyIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetAlertPolicyAssociationIdInput`<sup>Optional</sup> <a name="TargetAlertPolicyAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationIdInput"></a>

```csharp
public string TargetAlertPolicyAssociationIdInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThanInput"></a>

```csharp
public string TimeCreatedLessThanInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `AlertPolicyId`<sup>Required</sup> <a name="AlertPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyId"></a>

```csharp
public string AlertPolicyId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetAlertPolicyAssociationId`<sup>Required</sup> <a name="TargetAlertPolicyAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationId"></a>

```csharp
public string TargetAlertPolicyAssociationId { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetAlertPolicyAssociationsConfig <a name="DataOciDataSafeTargetAlertPolicyAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetAlertPolicyAssociationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AccessLevel = null,
    string AlertPolicyId = null,
    object CompartmentIdInSubtree = null,
    object Filter = null,
    string Id = null,
    string State = null,
    string TargetAlertPolicyAssociationId = null,
    string TargetId = null,
    string TimeCreatedGreaterThanOrEqualTo = null,
    string TimeCreatedLessThan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id DataOciDataSafeTargetAlertPolicyAssociations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#access_level DataOciDataSafeTargetAlertPolicyAssociations#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.alertPolicyId">AlertPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#alert_policy_id DataOciDataSafeTargetAlertPolicyAssociations#alert_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id_in_subtree DataOciDataSafeTargetAlertPolicyAssociations#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#id DataOciDataSafeTargetAlertPolicyAssociations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#state DataOciDataSafeTargetAlertPolicyAssociations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetAlertPolicyAssociationId">TargetAlertPolicyAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_alert_policy_association_id DataOciDataSafeTargetAlertPolicyAssociations#target_alert_policy_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_id DataOciDataSafeTargetAlertPolicyAssociations#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_greater_than_or_equal_to DataOciDataSafeTargetAlertPolicyAssociations#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_less_than DataOciDataSafeTargetAlertPolicyAssociations#time_created_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id DataOciDataSafeTargetAlertPolicyAssociations#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#access_level DataOciDataSafeTargetAlertPolicyAssociations#access_level}.

---

##### `AlertPolicyId`<sup>Optional</sup> <a name="AlertPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.alertPolicyId"></a>

```csharp
public string AlertPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#alert_policy_id DataOciDataSafeTargetAlertPolicyAssociations#alert_policy_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id_in_subtree DataOciDataSafeTargetAlertPolicyAssociations#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#filter DataOciDataSafeTargetAlertPolicyAssociations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#id DataOciDataSafeTargetAlertPolicyAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#state DataOciDataSafeTargetAlertPolicyAssociations#state}.

---

##### `TargetAlertPolicyAssociationId`<sup>Optional</sup> <a name="TargetAlertPolicyAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetAlertPolicyAssociationId"></a>

```csharp
public string TargetAlertPolicyAssociationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_alert_policy_association_id DataOciDataSafeTargetAlertPolicyAssociations#target_alert_policy_association_id}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_id DataOciDataSafeTargetAlertPolicyAssociations#target_id}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_greater_than_or_equal_to DataOciDataSafeTargetAlertPolicyAssociations#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_less_than DataOciDataSafeTargetAlertPolicyAssociations#time_created_less_than}.

---

### DataOciDataSafeTargetAlertPolicyAssociationsFilter <a name="DataOciDataSafeTargetAlertPolicyAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetAlertPolicyAssociationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#name DataOciDataSafeTargetAlertPolicyAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#values DataOciDataSafeTargetAlertPolicyAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#regex DataOciDataSafeTargetAlertPolicyAssociations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#name DataOciDataSafeTargetAlertPolicyAssociations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#values DataOciDataSafeTargetAlertPolicyAssociations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#regex DataOciDataSafeTargetAlertPolicyAssociations#regex}.

---

### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection {

};
```


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetAlertPolicyAssociationsFilterList <a name="DataOciDataSafeTargetAlertPolicyAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetAlertPolicyAssociationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.get"></a>

```csharp
private DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference <a name="DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems</a>

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.get"></a>

```csharp
private DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection</a>

---



