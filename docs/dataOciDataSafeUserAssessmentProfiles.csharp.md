# `dataOciDataSafeUserAssessmentProfiles` Submodule <a name="`dataOciDataSafeUserAssessmentProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentProfiles <a name="DataOciDataSafeUserAssessmentProfiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles oci_data_safe_user_assessment_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentProfiles(Construct Scope, string Id, DataOciDataSafeUserAssessmentProfilesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig">DataOciDataSafeUserAssessmentProfilesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig">DataOciDataSafeUserAssessmentProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsGreaterThanOrEqual">ResetFailedLoginAttemptsGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsLessThan">ResetFailedLoginAttemptsLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeGreaterThanOrEqual">ResetInactiveAccountTimeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeLessThan">ResetInactiveAccountTimeLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetIsUserCreated">ResetIsUserCreated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeGreaterThanOrEqual">ResetPasswordLockTimeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeLessThan">ResetPasswordLockTimeLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordVerificationFunction">ResetPasswordVerificationFunction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetProfileName">ResetProfileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserGreaterThanOrEqual">ResetSessionsPerUserGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserLessThan">ResetSessionsPerUserLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountGreaterThanOrEqual">ResetUserCountGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountLessThan">ResetUserCountLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetFailedLoginAttemptsGreaterThanOrEqual` <a name="ResetFailedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsGreaterThanOrEqual"></a>

```csharp
private void ResetFailedLoginAttemptsGreaterThanOrEqual()
```

##### `ResetFailedLoginAttemptsLessThan` <a name="ResetFailedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsLessThan"></a>

```csharp
private void ResetFailedLoginAttemptsLessThan()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInactiveAccountTimeGreaterThanOrEqual` <a name="ResetInactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeGreaterThanOrEqual"></a>

```csharp
private void ResetInactiveAccountTimeGreaterThanOrEqual()
```

##### `ResetInactiveAccountTimeLessThan` <a name="ResetInactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeLessThan"></a>

```csharp
private void ResetInactiveAccountTimeLessThan()
```

##### `ResetIsUserCreated` <a name="ResetIsUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetIsUserCreated"></a>

```csharp
private void ResetIsUserCreated()
```

##### `ResetPasswordLockTimeGreaterThanOrEqual` <a name="ResetPasswordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeGreaterThanOrEqual"></a>

```csharp
private void ResetPasswordLockTimeGreaterThanOrEqual()
```

##### `ResetPasswordLockTimeLessThan` <a name="ResetPasswordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeLessThan"></a>

```csharp
private void ResetPasswordLockTimeLessThan()
```

##### `ResetPasswordVerificationFunction` <a name="ResetPasswordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordVerificationFunction"></a>

```csharp
private void ResetPasswordVerificationFunction()
```

##### `ResetProfileName` <a name="ResetProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetProfileName"></a>

```csharp
private void ResetProfileName()
```

##### `ResetSessionsPerUserGreaterThanOrEqual` <a name="ResetSessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserGreaterThanOrEqual"></a>

```csharp
private void ResetSessionsPerUserGreaterThanOrEqual()
```

##### `ResetSessionsPerUserLessThan` <a name="ResetSessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserLessThan"></a>

```csharp
private void ResetSessionsPerUserLessThan()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

##### `ResetUserCountGreaterThanOrEqual` <a name="ResetUserCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountGreaterThanOrEqual"></a>

```csharp
private void ResetUserCountGreaterThanOrEqual()
```

##### `ResetUserCountLessThan` <a name="ResetUserCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountLessThan"></a>

```csharp
private void ResetUserCountLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentProfiles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentProfiles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentProfiles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentProfiles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfiles resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeUserAssessmentProfiles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeUserAssessmentProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList">DataOciDataSafeUserAssessmentProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profiles">Profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList">DataOciDataSafeUserAssessmentProfilesProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqualInput">FailedLoginAttemptsGreaterThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThanInput">FailedLoginAttemptsLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqualInput">InactiveAccountTimeGreaterThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThanInput">InactiveAccountTimeLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreatedInput">IsUserCreatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqualInput">PasswordLockTimeGreaterThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThanInput">PasswordLockTimeLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunctionInput">PasswordVerificationFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileNameInput">ProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqualInput">SessionsPerUserGreaterThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThanInput">SessionsPerUserLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentIdInput">UserAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqualInput">UserCountGreaterThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThanInput">UserCountLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqual">FailedLoginAttemptsGreaterThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThan">FailedLoginAttemptsLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqual">InactiveAccountTimeGreaterThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThan">InactiveAccountTimeLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreated">IsUserCreated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqual">PasswordLockTimeGreaterThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThan">PasswordLockTimeLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunction">PasswordVerificationFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqual">SessionsPerUserGreaterThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThan">SessionsPerUserLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqual">UserCountGreaterThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThan">UserCountLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filter"></a>

```csharp
public DataOciDataSafeUserAssessmentProfilesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList">DataOciDataSafeUserAssessmentProfilesFilterList</a>

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profiles"></a>

```csharp
public DataOciDataSafeUserAssessmentProfilesProfilesList Profiles { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList">DataOciDataSafeUserAssessmentProfilesProfilesList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `FailedLoginAttemptsGreaterThanOrEqualInput`<sup>Optional</sup> <a name="FailedLoginAttemptsGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqualInput"></a>

```csharp
public string FailedLoginAttemptsGreaterThanOrEqualInput { get; }
```

- *Type:* string

---

##### `FailedLoginAttemptsLessThanInput`<sup>Optional</sup> <a name="FailedLoginAttemptsLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThanInput"></a>

```csharp
public string FailedLoginAttemptsLessThanInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InactiveAccountTimeGreaterThanOrEqualInput`<sup>Optional</sup> <a name="InactiveAccountTimeGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqualInput"></a>

```csharp
public string InactiveAccountTimeGreaterThanOrEqualInput { get; }
```

- *Type:* string

---

##### `InactiveAccountTimeLessThanInput`<sup>Optional</sup> <a name="InactiveAccountTimeLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThanInput"></a>

```csharp
public string InactiveAccountTimeLessThanInput { get; }
```

- *Type:* string

---

##### `IsUserCreatedInput`<sup>Optional</sup> <a name="IsUserCreatedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreatedInput"></a>

```csharp
public object IsUserCreatedInput { get; }
```

- *Type:* object

---

##### `PasswordLockTimeGreaterThanOrEqualInput`<sup>Optional</sup> <a name="PasswordLockTimeGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqualInput"></a>

```csharp
public string PasswordLockTimeGreaterThanOrEqualInput { get; }
```

- *Type:* string

---

##### `PasswordLockTimeLessThanInput`<sup>Optional</sup> <a name="PasswordLockTimeLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThanInput"></a>

```csharp
public string PasswordLockTimeLessThanInput { get; }
```

- *Type:* string

---

##### `PasswordVerificationFunctionInput`<sup>Optional</sup> <a name="PasswordVerificationFunctionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunctionInput"></a>

```csharp
public string PasswordVerificationFunctionInput { get; }
```

- *Type:* string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileNameInput"></a>

```csharp
public string ProfileNameInput { get; }
```

- *Type:* string

---

##### `SessionsPerUserGreaterThanOrEqualInput`<sup>Optional</sup> <a name="SessionsPerUserGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqualInput"></a>

```csharp
public string SessionsPerUserGreaterThanOrEqualInput { get; }
```

- *Type:* string

---

##### `SessionsPerUserLessThanInput`<sup>Optional</sup> <a name="SessionsPerUserLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThanInput"></a>

```csharp
public string SessionsPerUserLessThanInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `UserAssessmentIdInput`<sup>Optional</sup> <a name="UserAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentIdInput"></a>

```csharp
public string UserAssessmentIdInput { get; }
```

- *Type:* string

---

##### `UserCountGreaterThanOrEqualInput`<sup>Optional</sup> <a name="UserCountGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqualInput"></a>

```csharp
public string UserCountGreaterThanOrEqualInput { get; }
```

- *Type:* string

---

##### `UserCountLessThanInput`<sup>Optional</sup> <a name="UserCountLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThanInput"></a>

```csharp
public string UserCountLessThanInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `FailedLoginAttemptsGreaterThanOrEqual`<sup>Required</sup> <a name="FailedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqual"></a>

```csharp
public string FailedLoginAttemptsGreaterThanOrEqual { get; }
```

- *Type:* string

---

##### `FailedLoginAttemptsLessThan`<sup>Required</sup> <a name="FailedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThan"></a>

```csharp
public string FailedLoginAttemptsLessThan { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InactiveAccountTimeGreaterThanOrEqual`<sup>Required</sup> <a name="InactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqual"></a>

```csharp
public string InactiveAccountTimeGreaterThanOrEqual { get; }
```

- *Type:* string

---

##### `InactiveAccountTimeLessThan`<sup>Required</sup> <a name="InactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThan"></a>

```csharp
public string InactiveAccountTimeLessThan { get; }
```

- *Type:* string

---

##### `IsUserCreated`<sup>Required</sup> <a name="IsUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreated"></a>

```csharp
public object IsUserCreated { get; }
```

- *Type:* object

---

##### `PasswordLockTimeGreaterThanOrEqual`<sup>Required</sup> <a name="PasswordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqual"></a>

```csharp
public string PasswordLockTimeGreaterThanOrEqual { get; }
```

- *Type:* string

---

##### `PasswordLockTimeLessThan`<sup>Required</sup> <a name="PasswordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThan"></a>

```csharp
public string PasswordLockTimeLessThan { get; }
```

- *Type:* string

---

##### `PasswordVerificationFunction`<sup>Required</sup> <a name="PasswordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunction"></a>

```csharp
public string PasswordVerificationFunction { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `SessionsPerUserGreaterThanOrEqual`<sup>Required</sup> <a name="SessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqual"></a>

```csharp
public string SessionsPerUserGreaterThanOrEqual { get; }
```

- *Type:* string

---

##### `SessionsPerUserLessThan`<sup>Required</sup> <a name="SessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThan"></a>

```csharp
public string SessionsPerUserLessThan { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; }
```

- *Type:* string

---

##### `UserCountGreaterThanOrEqual`<sup>Required</sup> <a name="UserCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqual"></a>

```csharp
public string UserCountGreaterThanOrEqual { get; }
```

- *Type:* string

---

##### `UserCountLessThan`<sup>Required</sup> <a name="UserCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThan"></a>

```csharp
public string UserCountLessThan { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentProfilesConfig <a name="DataOciDataSafeUserAssessmentProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentProfilesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string UserAssessmentId,
    string AccessLevel = null,
    object CompartmentIdInSubtree = null,
    string FailedLoginAttemptsGreaterThanOrEqual = null,
    string FailedLoginAttemptsLessThan = null,
    object Filter = null,
    string Id = null,
    string InactiveAccountTimeGreaterThanOrEqual = null,
    string InactiveAccountTimeLessThan = null,
    object IsUserCreated = null,
    string PasswordLockTimeGreaterThanOrEqual = null,
    string PasswordLockTimeLessThan = null,
    string PasswordVerificationFunction = null,
    string ProfileName = null,
    string SessionsPerUserGreaterThanOrEqual = null,
    string SessionsPerUserLessThan = null,
    string TargetId = null,
    string UserCountGreaterThanOrEqual = null,
    string UserCountLessThan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id DataOciDataSafeUserAssessmentProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_assessment_id DataOciDataSafeUserAssessmentProfiles#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#access_level DataOciDataSafeUserAssessmentProfiles#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfiles#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsGreaterThanOrEqual">FailedLoginAttemptsGreaterThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsLessThan">FailedLoginAttemptsLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_less_than DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#id DataOciDataSafeUserAssessmentProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeGreaterThanOrEqual">InactiveAccountTimeGreaterThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#inactive_account_time_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeLessThan">InactiveAccountTimeLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_less_than DataOciDataSafeUserAssessmentProfiles#inactive_account_time_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.isUserCreated">IsUserCreated</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#is_user_created DataOciDataSafeUserAssessmentProfiles#is_user_created}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeGreaterThanOrEqual">PasswordLockTimeGreaterThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#password_lock_time_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeLessThan">PasswordLockTimeLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_less_than DataOciDataSafeUserAssessmentProfiles#password_lock_time_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordVerificationFunction">PasswordVerificationFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_verification_function DataOciDataSafeUserAssessmentProfiles#password_verification_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.profileName">ProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#profile_name DataOciDataSafeUserAssessmentProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserGreaterThanOrEqual">SessionsPerUserGreaterThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#sessions_per_user_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserLessThan">SessionsPerUserLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_less_than DataOciDataSafeUserAssessmentProfiles#sessions_per_user_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#target_id DataOciDataSafeUserAssessmentProfiles#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountGreaterThanOrEqual">UserCountGreaterThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#user_count_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountLessThan">UserCountLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_less_than DataOciDataSafeUserAssessmentProfiles#user_count_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id DataOciDataSafeUserAssessmentProfiles#compartment_id}.

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_assessment_id DataOciDataSafeUserAssessmentProfiles#user_assessment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#access_level DataOciDataSafeUserAssessmentProfiles#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfiles#compartment_id_in_subtree}.

---

##### `FailedLoginAttemptsGreaterThanOrEqual`<sup>Optional</sup> <a name="FailedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsGreaterThanOrEqual"></a>

```csharp
public string FailedLoginAttemptsGreaterThanOrEqual { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_greater_than_or_equal}.

---

##### `FailedLoginAttemptsLessThan`<sup>Optional</sup> <a name="FailedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsLessThan"></a>

```csharp
public string FailedLoginAttemptsLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_less_than DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_less_than}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#filter DataOciDataSafeUserAssessmentProfiles#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#id DataOciDataSafeUserAssessmentProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InactiveAccountTimeGreaterThanOrEqual`<sup>Optional</sup> <a name="InactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeGreaterThanOrEqual"></a>

```csharp
public string InactiveAccountTimeGreaterThanOrEqual { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#inactive_account_time_greater_than_or_equal}.

---

##### `InactiveAccountTimeLessThan`<sup>Optional</sup> <a name="InactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeLessThan"></a>

```csharp
public string InactiveAccountTimeLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_less_than DataOciDataSafeUserAssessmentProfiles#inactive_account_time_less_than}.

---

##### `IsUserCreated`<sup>Optional</sup> <a name="IsUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.isUserCreated"></a>

```csharp
public object IsUserCreated { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#is_user_created DataOciDataSafeUserAssessmentProfiles#is_user_created}.

---

##### `PasswordLockTimeGreaterThanOrEqual`<sup>Optional</sup> <a name="PasswordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeGreaterThanOrEqual"></a>

```csharp
public string PasswordLockTimeGreaterThanOrEqual { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#password_lock_time_greater_than_or_equal}.

---

##### `PasswordLockTimeLessThan`<sup>Optional</sup> <a name="PasswordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeLessThan"></a>

```csharp
public string PasswordLockTimeLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_less_than DataOciDataSafeUserAssessmentProfiles#password_lock_time_less_than}.

---

##### `PasswordVerificationFunction`<sup>Optional</sup> <a name="PasswordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordVerificationFunction"></a>

```csharp
public string PasswordVerificationFunction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_verification_function DataOciDataSafeUserAssessmentProfiles#password_verification_function}.

---

##### `ProfileName`<sup>Optional</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.profileName"></a>

```csharp
public string ProfileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#profile_name DataOciDataSafeUserAssessmentProfiles#profile_name}.

---

##### `SessionsPerUserGreaterThanOrEqual`<sup>Optional</sup> <a name="SessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserGreaterThanOrEqual"></a>

```csharp
public string SessionsPerUserGreaterThanOrEqual { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#sessions_per_user_greater_than_or_equal}.

---

##### `SessionsPerUserLessThan`<sup>Optional</sup> <a name="SessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserLessThan"></a>

```csharp
public string SessionsPerUserLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_less_than DataOciDataSafeUserAssessmentProfiles#sessions_per_user_less_than}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#target_id DataOciDataSafeUserAssessmentProfiles#target_id}.

---

##### `UserCountGreaterThanOrEqual`<sup>Optional</sup> <a name="UserCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountGreaterThanOrEqual"></a>

```csharp
public string UserCountGreaterThanOrEqual { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#user_count_greater_than_or_equal}.

---

##### `UserCountLessThan`<sup>Optional</sup> <a name="UserCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountLessThan"></a>

```csharp
public string UserCountLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_less_than DataOciDataSafeUserAssessmentProfiles#user_count_less_than}.

---

### DataOciDataSafeUserAssessmentProfilesFilter <a name="DataOciDataSafeUserAssessmentProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentProfilesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#name DataOciDataSafeUserAssessmentProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#values DataOciDataSafeUserAssessmentProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#regex DataOciDataSafeUserAssessmentProfiles#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#name DataOciDataSafeUserAssessmentProfiles#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#values DataOciDataSafeUserAssessmentProfiles#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#regex DataOciDataSafeUserAssessmentProfiles#regex}.

---

### DataOciDataSafeUserAssessmentProfilesProfiles <a name="DataOciDataSafeUserAssessmentProfilesProfiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentProfilesProfiles {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentProfilesFilterList <a name="DataOciDataSafeUserAssessmentProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentProfilesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.get"></a>

```csharp
private DataOciDataSafeUserAssessmentProfilesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeUserAssessmentProfilesFilterOutputReference <a name="DataOciDataSafeUserAssessmentProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentProfilesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeUserAssessmentProfilesProfilesList <a name="DataOciDataSafeUserAssessmentProfilesProfilesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentProfilesProfilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.get"></a>

```csharp
private DataOciDataSafeUserAssessmentProfilesProfilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentProfilesProfilesOutputReference <a name="DataOciDataSafeUserAssessmentProfilesProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentProfilesProfilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compositeLimit">CompositeLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.connectTime">ConnectTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerCall">CpuPerCall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerSession">CpuPerSession</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.failedLoginAttempts">FailedLoginAttempts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.idleTime">IdleTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.inactiveAccountTime">InactiveAccountTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.isUserCreated">IsUserCreated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerCall">LogicalReadsPerCall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerSession">LogicalReadsPerSession</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordGraceTime">PasswordGraceTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLifeTime">PasswordLifeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLockTime">PasswordLockTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseMax">PasswordReuseMax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseTime">PasswordReuseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordRolloverTime">PasswordRolloverTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunction">PasswordVerificationFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunctionDetails">PasswordVerificationFunctionDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.privateSga">PrivateSga</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.sessionsPerUser">SessionsPerUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userCount">UserCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles">DataOciDataSafeUserAssessmentProfilesProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompositeLimit`<sup>Required</sup> <a name="CompositeLimit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compositeLimit"></a>

```csharp
public string CompositeLimit { get; }
```

- *Type:* string

---

##### `ConnectTime`<sup>Required</sup> <a name="ConnectTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.connectTime"></a>

```csharp
public string ConnectTime { get; }
```

- *Type:* string

---

##### `CpuPerCall`<sup>Required</sup> <a name="CpuPerCall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerCall"></a>

```csharp
public string CpuPerCall { get; }
```

- *Type:* string

---

##### `CpuPerSession`<sup>Required</sup> <a name="CpuPerSession" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerSession"></a>

```csharp
public string CpuPerSession { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FailedLoginAttempts`<sup>Required</sup> <a name="FailedLoginAttempts" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.failedLoginAttempts"></a>

```csharp
public string FailedLoginAttempts { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IdleTime`<sup>Required</sup> <a name="IdleTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.idleTime"></a>

```csharp
public string IdleTime { get; }
```

- *Type:* string

---

##### `InactiveAccountTime`<sup>Required</sup> <a name="InactiveAccountTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.inactiveAccountTime"></a>

```csharp
public string InactiveAccountTime { get; }
```

- *Type:* string

---

##### `IsUserCreated`<sup>Required</sup> <a name="IsUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.isUserCreated"></a>

```csharp
public IResolvable IsUserCreated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LogicalReadsPerCall`<sup>Required</sup> <a name="LogicalReadsPerCall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerCall"></a>

```csharp
public string LogicalReadsPerCall { get; }
```

- *Type:* string

---

##### `LogicalReadsPerSession`<sup>Required</sup> <a name="LogicalReadsPerSession" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerSession"></a>

```csharp
public string LogicalReadsPerSession { get; }
```

- *Type:* string

---

##### `PasswordGraceTime`<sup>Required</sup> <a name="PasswordGraceTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordGraceTime"></a>

```csharp
public string PasswordGraceTime { get; }
```

- *Type:* string

---

##### `PasswordLifeTime`<sup>Required</sup> <a name="PasswordLifeTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLifeTime"></a>

```csharp
public string PasswordLifeTime { get; }
```

- *Type:* string

---

##### `PasswordLockTime`<sup>Required</sup> <a name="PasswordLockTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLockTime"></a>

```csharp
public string PasswordLockTime { get; }
```

- *Type:* string

---

##### `PasswordReuseMax`<sup>Required</sup> <a name="PasswordReuseMax" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseMax"></a>

```csharp
public string PasswordReuseMax { get; }
```

- *Type:* string

---

##### `PasswordReuseTime`<sup>Required</sup> <a name="PasswordReuseTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseTime"></a>

```csharp
public string PasswordReuseTime { get; }
```

- *Type:* string

---

##### `PasswordRolloverTime`<sup>Required</sup> <a name="PasswordRolloverTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordRolloverTime"></a>

```csharp
public string PasswordRolloverTime { get; }
```

- *Type:* string

---

##### `PasswordVerificationFunction`<sup>Required</sup> <a name="PasswordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunction"></a>

```csharp
public string PasswordVerificationFunction { get; }
```

- *Type:* string

---

##### `PasswordVerificationFunctionDetails`<sup>Required</sup> <a name="PasswordVerificationFunctionDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunctionDetails"></a>

```csharp
public string PasswordVerificationFunctionDetails { get; }
```

- *Type:* string

---

##### `PrivateSga`<sup>Required</sup> <a name="PrivateSga" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.privateSga"></a>

```csharp
public string PrivateSga { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `SessionsPerUser`<sup>Required</sup> <a name="SessionsPerUser" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.sessionsPerUser"></a>

```csharp
public string SessionsPerUser { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; }
```

- *Type:* string

---

##### `UserCount`<sup>Required</sup> <a name="UserCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userCount"></a>

```csharp
public double UserCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeUserAssessmentProfilesProfiles InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles">DataOciDataSafeUserAssessmentProfilesProfiles</a>

---



