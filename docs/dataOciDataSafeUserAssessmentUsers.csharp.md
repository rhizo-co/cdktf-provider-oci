# `dataOciDataSafeUserAssessmentUsers` Submodule <a name="`dataOciDataSafeUserAssessmentUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentUsers <a name="DataOciDataSafeUserAssessmentUsers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users oci_data_safe_user_assessment_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUsers(Construct Scope, string Id, DataOciDataSafeUserAssessmentUsersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig">DataOciDataSafeUserAssessmentUsersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig">DataOciDataSafeUserAssessmentUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccountStatus">ResetAccountStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAreAllSchemasAccessible">ResetAreAllSchemasAccessible</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetSchemaList">ResetSchemaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginGreaterThanOrEqualTo">ResetTimeLastLoginGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginLessThan">ResetTimeLastLoginLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedGreaterThanOrEqualTo">ResetTimePasswordLastChangedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedLessThan">ResetTimePasswordLastChangedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedGreaterThanOrEqualTo">ResetTimeUserCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedLessThan">ResetTimeUserCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserCategory">ResetUserCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserKey">ResetUserKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserName">ResetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserProfile">ResetUserProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserRole">ResetUserRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserType">ResetUserType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetAccountStatus` <a name="ResetAccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccountStatus"></a>

```csharp
private void ResetAccountStatus()
```

##### `ResetAreAllSchemasAccessible` <a name="ResetAreAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAreAllSchemasAccessible"></a>

```csharp
private void ResetAreAllSchemasAccessible()
```

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSchemaList` <a name="ResetSchemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetSchemaList"></a>

```csharp
private void ResetSchemaList()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

##### `ResetTimeLastLoginGreaterThanOrEqualTo` <a name="ResetTimeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeLastLoginGreaterThanOrEqualTo()
```

##### `ResetTimeLastLoginLessThan` <a name="ResetTimeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginLessThan"></a>

```csharp
private void ResetTimeLastLoginLessThan()
```

##### `ResetTimePasswordLastChangedGreaterThanOrEqualTo` <a name="ResetTimePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimePasswordLastChangedGreaterThanOrEqualTo()
```

##### `ResetTimePasswordLastChangedLessThan` <a name="ResetTimePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedLessThan"></a>

```csharp
private void ResetTimePasswordLastChangedLessThan()
```

##### `ResetTimeUserCreatedGreaterThanOrEqualTo` <a name="ResetTimeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeUserCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeUserCreatedLessThan` <a name="ResetTimeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedLessThan"></a>

```csharp
private void ResetTimeUserCreatedLessThan()
```

##### `ResetUserCategory` <a name="ResetUserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserCategory"></a>

```csharp
private void ResetUserCategory()
```

##### `ResetUserKey` <a name="ResetUserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserKey"></a>

```csharp
private void ResetUserKey()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserName"></a>

```csharp
private void ResetUserName()
```

##### `ResetUserProfile` <a name="ResetUserProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserProfile"></a>

```csharp
private void ResetUserProfile()
```

##### `ResetUserRole` <a name="ResetUserRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserRole"></a>

```csharp
private void ResetUserRole()
```

##### `ResetUserType` <a name="ResetUserType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserType"></a>

```csharp
private void ResetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUsers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUsers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUsers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUsers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUsers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUsers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeUserAssessmentUsers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeUserAssessmentUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList">DataOciDataSafeUserAssessmentUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.users">Users</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList">DataOciDataSafeUserAssessmentUsersUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatusInput">AccountStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessibleInput">AreAllSchemasAccessibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaListInput">SchemaListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualToInput">TimeLastLoginGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThanInput">TimeLastLoginLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualToInput">TimePasswordLastChangedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThanInput">TimePasswordLastChangedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualToInput">TimeUserCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThanInput">TimeUserCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentIdInput">UserAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategoryInput">UserCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKeyInput">UserKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfileInput">UserProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRoleInput">UserRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userTypeInput">UserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatus">AccountStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessible">AreAllSchemasAccessible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaList">SchemaList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualTo">TimeLastLoginGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThan">TimeLastLoginLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualTo">TimePasswordLastChangedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThan">TimePasswordLastChangedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualTo">TimeUserCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThan">TimeUserCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategory">UserCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKey">UserKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfile">UserProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRole">UserRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userType">UserType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filter"></a>

```csharp
public DataOciDataSafeUserAssessmentUsersFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList">DataOciDataSafeUserAssessmentUsersFilterList</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.users"></a>

```csharp
public DataOciDataSafeUserAssessmentUsersUsersList Users { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList">DataOciDataSafeUserAssessmentUsersUsersList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `AccountStatusInput`<sup>Optional</sup> <a name="AccountStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatusInput"></a>

```csharp
public string AccountStatusInput { get; }
```

- *Type:* string

---

##### `AreAllSchemasAccessibleInput`<sup>Optional</sup> <a name="AreAllSchemasAccessibleInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessibleInput"></a>

```csharp
public object AreAllSchemasAccessibleInput { get; }
```

- *Type:* object

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SchemaListInput`<sup>Optional</sup> <a name="SchemaListInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaListInput"></a>

```csharp
public string[] SchemaListInput { get; }
```

- *Type:* string[]

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TimeLastLoginGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeLastLoginGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualToInput"></a>

```csharp
public string TimeLastLoginGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeLastLoginLessThanInput`<sup>Optional</sup> <a name="TimeLastLoginLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThanInput"></a>

```csharp
public string TimeLastLoginLessThanInput { get; }
```

- *Type:* string

---

##### `TimePasswordLastChangedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimePasswordLastChangedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualToInput"></a>

```csharp
public string TimePasswordLastChangedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimePasswordLastChangedLessThanInput`<sup>Optional</sup> <a name="TimePasswordLastChangedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThanInput"></a>

```csharp
public string TimePasswordLastChangedLessThanInput { get; }
```

- *Type:* string

---

##### `TimeUserCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeUserCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeUserCreatedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeUserCreatedLessThanInput`<sup>Optional</sup> <a name="TimeUserCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThanInput"></a>

```csharp
public string TimeUserCreatedLessThanInput { get; }
```

- *Type:* string

---

##### `UserAssessmentIdInput`<sup>Optional</sup> <a name="UserAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentIdInput"></a>

```csharp
public string UserAssessmentIdInput { get; }
```

- *Type:* string

---

##### `UserCategoryInput`<sup>Optional</sup> <a name="UserCategoryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategoryInput"></a>

```csharp
public string UserCategoryInput { get; }
```

- *Type:* string

---

##### `UserKeyInput`<sup>Optional</sup> <a name="UserKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKeyInput"></a>

```csharp
public string UserKeyInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `UserProfileInput`<sup>Optional</sup> <a name="UserProfileInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfileInput"></a>

```csharp
public string UserProfileInput { get; }
```

- *Type:* string

---

##### `UserRoleInput`<sup>Optional</sup> <a name="UserRoleInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRoleInput"></a>

```csharp
public string UserRoleInput { get; }
```

- *Type:* string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userTypeInput"></a>

```csharp
public string UserTypeInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `AccountStatus`<sup>Required</sup> <a name="AccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatus"></a>

```csharp
public string AccountStatus { get; }
```

- *Type:* string

---

##### `AreAllSchemasAccessible`<sup>Required</sup> <a name="AreAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessible"></a>

```csharp
public object AreAllSchemasAccessible { get; }
```

- *Type:* object

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SchemaList`<sup>Required</sup> <a name="SchemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaList"></a>

```csharp
public string[] SchemaList { get; }
```

- *Type:* string[]

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeLastLoginGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualTo"></a>

```csharp
public string TimeLastLoginGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeLastLoginLessThan`<sup>Required</sup> <a name="TimeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThan"></a>

```csharp
public string TimeLastLoginLessThan { get; }
```

- *Type:* string

---

##### `TimePasswordLastChangedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```csharp
public string TimePasswordLastChangedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimePasswordLastChangedLessThan`<sup>Required</sup> <a name="TimePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThan"></a>

```csharp
public string TimePasswordLastChangedLessThan { get; }
```

- *Type:* string

---

##### `TimeUserCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeUserCreatedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeUserCreatedLessThan`<sup>Required</sup> <a name="TimeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThan"></a>

```csharp
public string TimeUserCreatedLessThan { get; }
```

- *Type:* string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; }
```

- *Type:* string

---

##### `UserCategory`<sup>Required</sup> <a name="UserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategory"></a>

```csharp
public string UserCategory { get; }
```

- *Type:* string

---

##### `UserKey`<sup>Required</sup> <a name="UserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKey"></a>

```csharp
public string UserKey { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `UserProfile`<sup>Required</sup> <a name="UserProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfile"></a>

```csharp
public string UserProfile { get; }
```

- *Type:* string

---

##### `UserRole`<sup>Required</sup> <a name="UserRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRole"></a>

```csharp
public string UserRole { get; }
```

- *Type:* string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userType"></a>

```csharp
public string UserType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentUsersConfig <a name="DataOciDataSafeUserAssessmentUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUsersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UserAssessmentId,
    string AccessLevel = null,
    string AccountStatus = null,
    object AreAllSchemasAccessible = null,
    string AuthenticationType = null,
    object CompartmentIdInSubtree = null,
    object Filter = null,
    string Id = null,
    string[] SchemaList = null,
    string TargetId = null,
    string TimeLastLoginGreaterThanOrEqualTo = null,
    string TimeLastLoginLessThan = null,
    string TimePasswordLastChangedGreaterThanOrEqualTo = null,
    string TimePasswordLastChangedLessThan = null,
    string TimeUserCreatedGreaterThanOrEqualTo = null,
    string TimeUserCreatedLessThan = null,
    string UserCategory = null,
    string UserKey = null,
    string UserName = null,
    string UserProfile = null,
    string UserRole = null,
    string UserType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_assessment_id DataOciDataSafeUserAssessmentUsers#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#access_level DataOciDataSafeUserAssessmentUsers#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accountStatus">AccountStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#account_status DataOciDataSafeUserAssessmentUsers#account_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.areAllSchemasAccessible">AreAllSchemasAccessible</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#are_all_schemas_accessible DataOciDataSafeUserAssessmentUsers#are_all_schemas_accessible}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#authentication_type DataOciDataSafeUserAssessmentUsers#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#compartment_id_in_subtree DataOciDataSafeUserAssessmentUsers#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#id DataOciDataSafeUserAssessmentUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.schemaList">SchemaList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#schema_list DataOciDataSafeUserAssessmentUsers#schema_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#target_id DataOciDataSafeUserAssessmentUsers#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginGreaterThanOrEqualTo">TimeLastLoginGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_last_login_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginLessThan">TimeLastLoginLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_less_than DataOciDataSafeUserAssessmentUsers#time_last_login_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedGreaterThanOrEqualTo">TimePasswordLastChangedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_last_changed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedLessThan">TimePasswordLastChangedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUsers#time_password_last_changed_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedGreaterThanOrEqualTo">TimeUserCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_user_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedLessThan">TimeUserCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_less_than DataOciDataSafeUserAssessmentUsers#time_user_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userCategory">UserCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_category DataOciDataSafeUserAssessmentUsers#user_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userKey">UserKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_key DataOciDataSafeUserAssessmentUsers#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_name DataOciDataSafeUserAssessmentUsers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userProfile">UserProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_profile DataOciDataSafeUserAssessmentUsers#user_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userRole">UserRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_role DataOciDataSafeUserAssessmentUsers#user_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userType">UserType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_type DataOciDataSafeUserAssessmentUsers#user_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_assessment_id DataOciDataSafeUserAssessmentUsers#user_assessment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#access_level DataOciDataSafeUserAssessmentUsers#access_level}.

---

##### `AccountStatus`<sup>Optional</sup> <a name="AccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accountStatus"></a>

```csharp
public string AccountStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#account_status DataOciDataSafeUserAssessmentUsers#account_status}.

---

##### `AreAllSchemasAccessible`<sup>Optional</sup> <a name="AreAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.areAllSchemasAccessible"></a>

```csharp
public object AreAllSchemasAccessible { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#are_all_schemas_accessible DataOciDataSafeUserAssessmentUsers#are_all_schemas_accessible}.

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#authentication_type DataOciDataSafeUserAssessmentUsers#authentication_type}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#compartment_id_in_subtree DataOciDataSafeUserAssessmentUsers#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#filter DataOciDataSafeUserAssessmentUsers#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#id DataOciDataSafeUserAssessmentUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SchemaList`<sup>Optional</sup> <a name="SchemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.schemaList"></a>

```csharp
public string[] SchemaList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#schema_list DataOciDataSafeUserAssessmentUsers#schema_list}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#target_id DataOciDataSafeUserAssessmentUsers#target_id}.

---

##### `TimeLastLoginGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginGreaterThanOrEqualTo"></a>

```csharp
public string TimeLastLoginGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_last_login_greater_than_or_equal_to}.

---

##### `TimeLastLoginLessThan`<sup>Optional</sup> <a name="TimeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginLessThan"></a>

```csharp
public string TimeLastLoginLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_less_than DataOciDataSafeUserAssessmentUsers#time_last_login_less_than}.

---

##### `TimePasswordLastChangedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```csharp
public string TimePasswordLastChangedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_last_changed_greater_than_or_equal_to}.

---

##### `TimePasswordLastChangedLessThan`<sup>Optional</sup> <a name="TimePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedLessThan"></a>

```csharp
public string TimePasswordLastChangedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUsers#time_password_last_changed_less_than}.

---

##### `TimeUserCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeUserCreatedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_user_created_greater_than_or_equal_to}.

---

##### `TimeUserCreatedLessThan`<sup>Optional</sup> <a name="TimeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedLessThan"></a>

```csharp
public string TimeUserCreatedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_less_than DataOciDataSafeUserAssessmentUsers#time_user_created_less_than}.

---

##### `UserCategory`<sup>Optional</sup> <a name="UserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userCategory"></a>

```csharp
public string UserCategory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_category DataOciDataSafeUserAssessmentUsers#user_category}.

---

##### `UserKey`<sup>Optional</sup> <a name="UserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userKey"></a>

```csharp
public string UserKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_key DataOciDataSafeUserAssessmentUsers#user_key}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_name DataOciDataSafeUserAssessmentUsers#user_name}.

---

##### `UserProfile`<sup>Optional</sup> <a name="UserProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userProfile"></a>

```csharp
public string UserProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_profile DataOciDataSafeUserAssessmentUsers#user_profile}.

---

##### `UserRole`<sup>Optional</sup> <a name="UserRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userRole"></a>

```csharp
public string UserRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_role DataOciDataSafeUserAssessmentUsers#user_role}.

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userType"></a>

```csharp
public string UserType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_type DataOciDataSafeUserAssessmentUsers#user_type}.

---

### DataOciDataSafeUserAssessmentUsersFilter <a name="DataOciDataSafeUserAssessmentUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUsersFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#name DataOciDataSafeUserAssessmentUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#values DataOciDataSafeUserAssessmentUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#regex DataOciDataSafeUserAssessmentUsers#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#name DataOciDataSafeUserAssessmentUsers#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#values DataOciDataSafeUserAssessmentUsers#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#regex DataOciDataSafeUserAssessmentUsers#regex}.

---

### DataOciDataSafeUserAssessmentUsersUsers <a name="DataOciDataSafeUserAssessmentUsersUsers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUsersUsers {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentUsersFilterList <a name="DataOciDataSafeUserAssessmentUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUsersFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.get"></a>

```csharp
private DataOciDataSafeUserAssessmentUsersFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeUserAssessmentUsersFilterOutputReference <a name="DataOciDataSafeUserAssessmentUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUsersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeUserAssessmentUsersUsersList <a name="DataOciDataSafeUserAssessmentUsersUsersList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUsersUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.get"></a>

```csharp
private DataOciDataSafeUserAssessmentUsersUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentUsersUsersOutputReference <a name="DataOciDataSafeUserAssessmentUsersUsersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUsersUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.accountStatus">AccountStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.adminRoles">AdminRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.areAllSchemasAccessible">AreAllSchemasAccessible</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.schemaList">SchemaList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeLastLogin">TimeLastLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timePasswordChanged">TimePasswordChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeUserCreated">TimeUserCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userCategory">UserCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userProfile">UserProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userTypes">UserTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers">DataOciDataSafeUserAssessmentUsersUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountStatus`<sup>Required</sup> <a name="AccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.accountStatus"></a>

```csharp
public string AccountStatus { get; }
```

- *Type:* string

---

##### `AdminRoles`<sup>Required</sup> <a name="AdminRoles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.adminRoles"></a>

```csharp
public string[] AdminRoles { get; }
```

- *Type:* string[]

---

##### `AreAllSchemasAccessible`<sup>Required</sup> <a name="AreAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.areAllSchemasAccessible"></a>

```csharp
public IResolvable AreAllSchemasAccessible { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `SchemaList`<sup>Required</sup> <a name="SchemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.schemaList"></a>

```csharp
public string[] SchemaList { get; }
```

- *Type:* string[]

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeLastLogin`<sup>Required</sup> <a name="TimeLastLogin" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeLastLogin"></a>

```csharp
public string TimeLastLogin { get; }
```

- *Type:* string

---

##### `TimePasswordChanged`<sup>Required</sup> <a name="TimePasswordChanged" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timePasswordChanged"></a>

```csharp
public string TimePasswordChanged { get; }
```

- *Type:* string

---

##### `TimeUserCreated`<sup>Required</sup> <a name="TimeUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeUserCreated"></a>

```csharp
public string TimeUserCreated { get; }
```

- *Type:* string

---

##### `UserCategory`<sup>Required</sup> <a name="UserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userCategory"></a>

```csharp
public string UserCategory { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `UserProfile`<sup>Required</sup> <a name="UserProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userProfile"></a>

```csharp
public string UserProfile { get; }
```

- *Type:* string

---

##### `UserTypes`<sup>Required</sup> <a name="UserTypes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userTypes"></a>

```csharp
public string[] UserTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeUserAssessmentUsersUsers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers">DataOciDataSafeUserAssessmentUsersUsers</a>

---



