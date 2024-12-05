# `dataOciDataSafeUserAssessmentProfiles` Submodule <a name="`dataOciDataSafeUserAssessmentProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentProfiles <a name="DataOciDataSafeUserAssessmentProfiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles oci_data_safe_user_assessment_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

dataocidatasafeuserassessmentprofiles.NewDataOciDataSafeUserAssessmentProfiles(scope Construct, id *string, config DataOciDataSafeUserAssessmentProfilesConfig) DataOciDataSafeUserAssessmentProfiles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig">DataOciDataSafeUserAssessmentProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetFailedLoginAttemptsGreaterThanOrEqual` <a name="ResetFailedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsGreaterThanOrEqual"></a>

```go
func ResetFailedLoginAttemptsGreaterThanOrEqual()
```

##### `ResetFailedLoginAttemptsLessThan` <a name="ResetFailedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsLessThan"></a>

```go
func ResetFailedLoginAttemptsLessThan()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetId"></a>

```go
func ResetId()
```

##### `ResetInactiveAccountTimeGreaterThanOrEqual` <a name="ResetInactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeGreaterThanOrEqual"></a>

```go
func ResetInactiveAccountTimeGreaterThanOrEqual()
```

##### `ResetInactiveAccountTimeLessThan` <a name="ResetInactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeLessThan"></a>

```go
func ResetInactiveAccountTimeLessThan()
```

##### `ResetIsUserCreated` <a name="ResetIsUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetIsUserCreated"></a>

```go
func ResetIsUserCreated()
```

##### `ResetPasswordLockTimeGreaterThanOrEqual` <a name="ResetPasswordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeGreaterThanOrEqual"></a>

```go
func ResetPasswordLockTimeGreaterThanOrEqual()
```

##### `ResetPasswordLockTimeLessThan` <a name="ResetPasswordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeLessThan"></a>

```go
func ResetPasswordLockTimeLessThan()
```

##### `ResetPasswordVerificationFunction` <a name="ResetPasswordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordVerificationFunction"></a>

```go
func ResetPasswordVerificationFunction()
```

##### `ResetProfileName` <a name="ResetProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetProfileName"></a>

```go
func ResetProfileName()
```

##### `ResetSessionsPerUserGreaterThanOrEqual` <a name="ResetSessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserGreaterThanOrEqual"></a>

```go
func ResetSessionsPerUserGreaterThanOrEqual()
```

##### `ResetSessionsPerUserLessThan` <a name="ResetSessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserLessThan"></a>

```go
func ResetSessionsPerUserLessThan()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetTargetId"></a>

```go
func ResetTargetId()
```

##### `ResetUserCountGreaterThanOrEqual` <a name="ResetUserCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountGreaterThanOrEqual"></a>

```go
func ResetUserCountGreaterThanOrEqual()
```

##### `ResetUserCountLessThan` <a name="ResetUserCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountLessThan"></a>

```go
func ResetUserCountLessThan()
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

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

dataocidatasafeuserassessmentprofiles.DataOciDataSafeUserAssessmentProfiles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

dataocidatasafeuserassessmentprofiles.DataOciDataSafeUserAssessmentProfiles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

dataocidatasafeuserassessmentprofiles.DataOciDataSafeUserAssessmentProfiles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

dataocidatasafeuserassessmentprofiles.DataOciDataSafeUserAssessmentProfiles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeUserAssessmentProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeUserAssessmentProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList">DataOciDataSafeUserAssessmentProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profiles">Profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList">DataOciDataSafeUserAssessmentProfilesProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqualInput">FailedLoginAttemptsGreaterThanOrEqualInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThanInput">FailedLoginAttemptsLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqualInput">InactiveAccountTimeGreaterThanOrEqualInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThanInput">InactiveAccountTimeLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreatedInput">IsUserCreatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqualInput">PasswordLockTimeGreaterThanOrEqualInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThanInput">PasswordLockTimeLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunctionInput">PasswordVerificationFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileNameInput">ProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqualInput">SessionsPerUserGreaterThanOrEqualInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThanInput">SessionsPerUserLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentIdInput">UserAssessmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqualInput">UserCountGreaterThanOrEqualInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThanInput">UserCountLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqual">FailedLoginAttemptsGreaterThanOrEqual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThan">FailedLoginAttemptsLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqual">InactiveAccountTimeGreaterThanOrEqual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThan">InactiveAccountTimeLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreated">IsUserCreated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqual">PasswordLockTimeGreaterThanOrEqual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThan">PasswordLockTimeLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunction">PasswordVerificationFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqual">SessionsPerUserGreaterThanOrEqual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThan">SessionsPerUserLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentId">UserAssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqual">UserCountGreaterThanOrEqual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThan">UserCountLessThan</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filter"></a>

```go
func Filter() DataOciDataSafeUserAssessmentProfilesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList">DataOciDataSafeUserAssessmentProfilesFilterList</a>

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profiles"></a>

```go
func Profiles() DataOciDataSafeUserAssessmentProfilesProfilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList">DataOciDataSafeUserAssessmentProfilesProfilesList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `FailedLoginAttemptsGreaterThanOrEqualInput`<sup>Optional</sup> <a name="FailedLoginAttemptsGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqualInput"></a>

```go
func FailedLoginAttemptsGreaterThanOrEqualInput() *string
```

- *Type:* *string

---

##### `FailedLoginAttemptsLessThanInput`<sup>Optional</sup> <a name="FailedLoginAttemptsLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThanInput"></a>

```go
func FailedLoginAttemptsLessThanInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InactiveAccountTimeGreaterThanOrEqualInput`<sup>Optional</sup> <a name="InactiveAccountTimeGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqualInput"></a>

```go
func InactiveAccountTimeGreaterThanOrEqualInput() *string
```

- *Type:* *string

---

##### `InactiveAccountTimeLessThanInput`<sup>Optional</sup> <a name="InactiveAccountTimeLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThanInput"></a>

```go
func InactiveAccountTimeLessThanInput() *string
```

- *Type:* *string

---

##### `IsUserCreatedInput`<sup>Optional</sup> <a name="IsUserCreatedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreatedInput"></a>

```go
func IsUserCreatedInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordLockTimeGreaterThanOrEqualInput`<sup>Optional</sup> <a name="PasswordLockTimeGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqualInput"></a>

```go
func PasswordLockTimeGreaterThanOrEqualInput() *string
```

- *Type:* *string

---

##### `PasswordLockTimeLessThanInput`<sup>Optional</sup> <a name="PasswordLockTimeLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThanInput"></a>

```go
func PasswordLockTimeLessThanInput() *string
```

- *Type:* *string

---

##### `PasswordVerificationFunctionInput`<sup>Optional</sup> <a name="PasswordVerificationFunctionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunctionInput"></a>

```go
func PasswordVerificationFunctionInput() *string
```

- *Type:* *string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileNameInput"></a>

```go
func ProfileNameInput() *string
```

- *Type:* *string

---

##### `SessionsPerUserGreaterThanOrEqualInput`<sup>Optional</sup> <a name="SessionsPerUserGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqualInput"></a>

```go
func SessionsPerUserGreaterThanOrEqualInput() *string
```

- *Type:* *string

---

##### `SessionsPerUserLessThanInput`<sup>Optional</sup> <a name="SessionsPerUserLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThanInput"></a>

```go
func SessionsPerUserLessThanInput() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `UserAssessmentIdInput`<sup>Optional</sup> <a name="UserAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentIdInput"></a>

```go
func UserAssessmentIdInput() *string
```

- *Type:* *string

---

##### `UserCountGreaterThanOrEqualInput`<sup>Optional</sup> <a name="UserCountGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqualInput"></a>

```go
func UserCountGreaterThanOrEqualInput() *string
```

- *Type:* *string

---

##### `UserCountLessThanInput`<sup>Optional</sup> <a name="UserCountLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThanInput"></a>

```go
func UserCountLessThanInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `FailedLoginAttemptsGreaterThanOrEqual`<sup>Required</sup> <a name="FailedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqual"></a>

```go
func FailedLoginAttemptsGreaterThanOrEqual() *string
```

- *Type:* *string

---

##### `FailedLoginAttemptsLessThan`<sup>Required</sup> <a name="FailedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThan"></a>

```go
func FailedLoginAttemptsLessThan() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InactiveAccountTimeGreaterThanOrEqual`<sup>Required</sup> <a name="InactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqual"></a>

```go
func InactiveAccountTimeGreaterThanOrEqual() *string
```

- *Type:* *string

---

##### `InactiveAccountTimeLessThan`<sup>Required</sup> <a name="InactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThan"></a>

```go
func InactiveAccountTimeLessThan() *string
```

- *Type:* *string

---

##### `IsUserCreated`<sup>Required</sup> <a name="IsUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreated"></a>

```go
func IsUserCreated() interface{}
```

- *Type:* interface{}

---

##### `PasswordLockTimeGreaterThanOrEqual`<sup>Required</sup> <a name="PasswordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqual"></a>

```go
func PasswordLockTimeGreaterThanOrEqual() *string
```

- *Type:* *string

---

##### `PasswordLockTimeLessThan`<sup>Required</sup> <a name="PasswordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThan"></a>

```go
func PasswordLockTimeLessThan() *string
```

- *Type:* *string

---

##### `PasswordVerificationFunction`<sup>Required</sup> <a name="PasswordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunction"></a>

```go
func PasswordVerificationFunction() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `SessionsPerUserGreaterThanOrEqual`<sup>Required</sup> <a name="SessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqual"></a>

```go
func SessionsPerUserGreaterThanOrEqual() *string
```

- *Type:* *string

---

##### `SessionsPerUserLessThan`<sup>Required</sup> <a name="SessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThan"></a>

```go
func SessionsPerUserLessThan() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentId"></a>

```go
func UserAssessmentId() *string
```

- *Type:* *string

---

##### `UserCountGreaterThanOrEqual`<sup>Required</sup> <a name="UserCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqual"></a>

```go
func UserCountGreaterThanOrEqual() *string
```

- *Type:* *string

---

##### `UserCountLessThan`<sup>Required</sup> <a name="UserCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThan"></a>

```go
func UserCountLessThan() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentProfilesConfig <a name="DataOciDataSafeUserAssessmentProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

&dataocidatasafeuserassessmentprofiles.DataOciDataSafeUserAssessmentProfilesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	UserAssessmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	FailedLoginAttemptsGreaterThanOrEqual: *string,
	FailedLoginAttemptsLessThan: *string,
	Filter: interface{},
	Id: *string,
	InactiveAccountTimeGreaterThanOrEqual: *string,
	InactiveAccountTimeLessThan: *string,
	IsUserCreated: interface{},
	PasswordLockTimeGreaterThanOrEqual: *string,
	PasswordLockTimeLessThan: *string,
	PasswordVerificationFunction: *string,
	ProfileName: *string,
	SessionsPerUserGreaterThanOrEqual: *string,
	SessionsPerUserLessThan: *string,
	TargetId: *string,
	UserCountGreaterThanOrEqual: *string,
	UserCountLessThan: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id DataOciDataSafeUserAssessmentProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userAssessmentId">UserAssessmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_assessment_id DataOciDataSafeUserAssessmentProfiles#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#access_level DataOciDataSafeUserAssessmentProfiles#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfiles#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsGreaterThanOrEqual">FailedLoginAttemptsGreaterThanOrEqual</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsLessThan">FailedLoginAttemptsLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_less_than DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#id DataOciDataSafeUserAssessmentProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeGreaterThanOrEqual">InactiveAccountTimeGreaterThanOrEqual</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#inactive_account_time_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeLessThan">InactiveAccountTimeLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_less_than DataOciDataSafeUserAssessmentProfiles#inactive_account_time_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.isUserCreated">IsUserCreated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#is_user_created DataOciDataSafeUserAssessmentProfiles#is_user_created}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeGreaterThanOrEqual">PasswordLockTimeGreaterThanOrEqual</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#password_lock_time_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeLessThan">PasswordLockTimeLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_less_than DataOciDataSafeUserAssessmentProfiles#password_lock_time_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordVerificationFunction">PasswordVerificationFunction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_verification_function DataOciDataSafeUserAssessmentProfiles#password_verification_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.profileName">ProfileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#profile_name DataOciDataSafeUserAssessmentProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserGreaterThanOrEqual">SessionsPerUserGreaterThanOrEqual</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#sessions_per_user_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserLessThan">SessionsPerUserLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_less_than DataOciDataSafeUserAssessmentProfiles#sessions_per_user_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#target_id DataOciDataSafeUserAssessmentProfiles#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountGreaterThanOrEqual">UserCountGreaterThanOrEqual</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#user_count_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountLessThan">UserCountLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_less_than DataOciDataSafeUserAssessmentProfiles#user_count_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id DataOciDataSafeUserAssessmentProfiles#compartment_id}.

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userAssessmentId"></a>

```go
UserAssessmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_assessment_id DataOciDataSafeUserAssessmentProfiles#user_assessment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#access_level DataOciDataSafeUserAssessmentProfiles#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfiles#compartment_id_in_subtree}.

---

##### `FailedLoginAttemptsGreaterThanOrEqual`<sup>Optional</sup> <a name="FailedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsGreaterThanOrEqual"></a>

```go
FailedLoginAttemptsGreaterThanOrEqual *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_greater_than_or_equal}.

---

##### `FailedLoginAttemptsLessThan`<sup>Optional</sup> <a name="FailedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsLessThan"></a>

```go
FailedLoginAttemptsLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_less_than DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_less_than}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#filter DataOciDataSafeUserAssessmentProfiles#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#id DataOciDataSafeUserAssessmentProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InactiveAccountTimeGreaterThanOrEqual`<sup>Optional</sup> <a name="InactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeGreaterThanOrEqual"></a>

```go
InactiveAccountTimeGreaterThanOrEqual *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#inactive_account_time_greater_than_or_equal}.

---

##### `InactiveAccountTimeLessThan`<sup>Optional</sup> <a name="InactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeLessThan"></a>

```go
InactiveAccountTimeLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_less_than DataOciDataSafeUserAssessmentProfiles#inactive_account_time_less_than}.

---

##### `IsUserCreated`<sup>Optional</sup> <a name="IsUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.isUserCreated"></a>

```go
IsUserCreated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#is_user_created DataOciDataSafeUserAssessmentProfiles#is_user_created}.

---

##### `PasswordLockTimeGreaterThanOrEqual`<sup>Optional</sup> <a name="PasswordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeGreaterThanOrEqual"></a>

```go
PasswordLockTimeGreaterThanOrEqual *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#password_lock_time_greater_than_or_equal}.

---

##### `PasswordLockTimeLessThan`<sup>Optional</sup> <a name="PasswordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeLessThan"></a>

```go
PasswordLockTimeLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_less_than DataOciDataSafeUserAssessmentProfiles#password_lock_time_less_than}.

---

##### `PasswordVerificationFunction`<sup>Optional</sup> <a name="PasswordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordVerificationFunction"></a>

```go
PasswordVerificationFunction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_verification_function DataOciDataSafeUserAssessmentProfiles#password_verification_function}.

---

##### `ProfileName`<sup>Optional</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.profileName"></a>

```go
ProfileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#profile_name DataOciDataSafeUserAssessmentProfiles#profile_name}.

---

##### `SessionsPerUserGreaterThanOrEqual`<sup>Optional</sup> <a name="SessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserGreaterThanOrEqual"></a>

```go
SessionsPerUserGreaterThanOrEqual *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#sessions_per_user_greater_than_or_equal}.

---

##### `SessionsPerUserLessThan`<sup>Optional</sup> <a name="SessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserLessThan"></a>

```go
SessionsPerUserLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_less_than DataOciDataSafeUserAssessmentProfiles#sessions_per_user_less_than}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#target_id DataOciDataSafeUserAssessmentProfiles#target_id}.

---

##### `UserCountGreaterThanOrEqual`<sup>Optional</sup> <a name="UserCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountGreaterThanOrEqual"></a>

```go
UserCountGreaterThanOrEqual *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#user_count_greater_than_or_equal}.

---

##### `UserCountLessThan`<sup>Optional</sup> <a name="UserCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountLessThan"></a>

```go
UserCountLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_less_than DataOciDataSafeUserAssessmentProfiles#user_count_less_than}.

---

### DataOciDataSafeUserAssessmentProfilesFilter <a name="DataOciDataSafeUserAssessmentProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

&dataocidatasafeuserassessmentprofiles.DataOciDataSafeUserAssessmentProfilesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#name DataOciDataSafeUserAssessmentProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#values DataOciDataSafeUserAssessmentProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#regex DataOciDataSafeUserAssessmentProfiles#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#name DataOciDataSafeUserAssessmentProfiles#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#values DataOciDataSafeUserAssessmentProfiles#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#regex DataOciDataSafeUserAssessmentProfiles#regex}.

---

### DataOciDataSafeUserAssessmentProfilesProfiles <a name="DataOciDataSafeUserAssessmentProfilesProfiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

&dataocidatasafeuserassessmentprofiles.DataOciDataSafeUserAssessmentProfilesProfiles {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentProfilesFilterList <a name="DataOciDataSafeUserAssessmentProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

dataocidatasafeuserassessmentprofiles.NewDataOciDataSafeUserAssessmentProfilesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeUserAssessmentProfilesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeUserAssessmentProfilesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeUserAssessmentProfilesFilterOutputReference <a name="DataOciDataSafeUserAssessmentProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

dataocidatasafeuserassessmentprofiles.NewDataOciDataSafeUserAssessmentProfilesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeUserAssessmentProfilesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeUserAssessmentProfilesProfilesList <a name="DataOciDataSafeUserAssessmentProfilesProfilesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

dataocidatasafeuserassessmentprofiles.NewDataOciDataSafeUserAssessmentProfilesProfilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeUserAssessmentProfilesProfilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.get"></a>

```go
func Get(index *f64) DataOciDataSafeUserAssessmentProfilesProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeUserAssessmentProfilesProfilesOutputReference <a name="DataOciDataSafeUserAssessmentProfilesProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofiles"

dataocidatasafeuserassessmentprofiles.NewDataOciDataSafeUserAssessmentProfilesProfilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeUserAssessmentProfilesProfilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compositeLimit">CompositeLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.connectTime">ConnectTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerCall">CpuPerCall</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerSession">CpuPerSession</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.failedLoginAttempts">FailedLoginAttempts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.idleTime">IdleTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.inactiveAccountTime">InactiveAccountTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.isUserCreated">IsUserCreated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerCall">LogicalReadsPerCall</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerSession">LogicalReadsPerSession</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordGraceTime">PasswordGraceTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLifeTime">PasswordLifeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLockTime">PasswordLockTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseMax">PasswordReuseMax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseTime">PasswordReuseTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordRolloverTime">PasswordRolloverTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunction">PasswordVerificationFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunctionDetails">PasswordVerificationFunctionDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.privateSga">PrivateSga</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.sessionsPerUser">SessionsPerUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userAssessmentId">UserAssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userCount">UserCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles">DataOciDataSafeUserAssessmentProfilesProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompositeLimit`<sup>Required</sup> <a name="CompositeLimit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compositeLimit"></a>

```go
func CompositeLimit() *string
```

- *Type:* *string

---

##### `ConnectTime`<sup>Required</sup> <a name="ConnectTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.connectTime"></a>

```go
func ConnectTime() *string
```

- *Type:* *string

---

##### `CpuPerCall`<sup>Required</sup> <a name="CpuPerCall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerCall"></a>

```go
func CpuPerCall() *string
```

- *Type:* *string

---

##### `CpuPerSession`<sup>Required</sup> <a name="CpuPerSession" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerSession"></a>

```go
func CpuPerSession() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FailedLoginAttempts`<sup>Required</sup> <a name="FailedLoginAttempts" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.failedLoginAttempts"></a>

```go
func FailedLoginAttempts() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IdleTime`<sup>Required</sup> <a name="IdleTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.idleTime"></a>

```go
func IdleTime() *string
```

- *Type:* *string

---

##### `InactiveAccountTime`<sup>Required</sup> <a name="InactiveAccountTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.inactiveAccountTime"></a>

```go
func InactiveAccountTime() *string
```

- *Type:* *string

---

##### `IsUserCreated`<sup>Required</sup> <a name="IsUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.isUserCreated"></a>

```go
func IsUserCreated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LogicalReadsPerCall`<sup>Required</sup> <a name="LogicalReadsPerCall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerCall"></a>

```go
func LogicalReadsPerCall() *string
```

- *Type:* *string

---

##### `LogicalReadsPerSession`<sup>Required</sup> <a name="LogicalReadsPerSession" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerSession"></a>

```go
func LogicalReadsPerSession() *string
```

- *Type:* *string

---

##### `PasswordGraceTime`<sup>Required</sup> <a name="PasswordGraceTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordGraceTime"></a>

```go
func PasswordGraceTime() *string
```

- *Type:* *string

---

##### `PasswordLifeTime`<sup>Required</sup> <a name="PasswordLifeTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLifeTime"></a>

```go
func PasswordLifeTime() *string
```

- *Type:* *string

---

##### `PasswordLockTime`<sup>Required</sup> <a name="PasswordLockTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLockTime"></a>

```go
func PasswordLockTime() *string
```

- *Type:* *string

---

##### `PasswordReuseMax`<sup>Required</sup> <a name="PasswordReuseMax" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseMax"></a>

```go
func PasswordReuseMax() *string
```

- *Type:* *string

---

##### `PasswordReuseTime`<sup>Required</sup> <a name="PasswordReuseTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseTime"></a>

```go
func PasswordReuseTime() *string
```

- *Type:* *string

---

##### `PasswordRolloverTime`<sup>Required</sup> <a name="PasswordRolloverTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordRolloverTime"></a>

```go
func PasswordRolloverTime() *string
```

- *Type:* *string

---

##### `PasswordVerificationFunction`<sup>Required</sup> <a name="PasswordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunction"></a>

```go
func PasswordVerificationFunction() *string
```

- *Type:* *string

---

##### `PasswordVerificationFunctionDetails`<sup>Required</sup> <a name="PasswordVerificationFunctionDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunctionDetails"></a>

```go
func PasswordVerificationFunctionDetails() *string
```

- *Type:* *string

---

##### `PrivateSga`<sup>Required</sup> <a name="PrivateSga" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.privateSga"></a>

```go
func PrivateSga() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `SessionsPerUser`<sup>Required</sup> <a name="SessionsPerUser" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.sessionsPerUser"></a>

```go
func SessionsPerUser() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userAssessmentId"></a>

```go
func UserAssessmentId() *string
```

- *Type:* *string

---

##### `UserCount`<sup>Required</sup> <a name="UserCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userCount"></a>

```go
func UserCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeUserAssessmentProfilesProfiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles">DataOciDataSafeUserAssessmentProfilesProfiles</a>

---



