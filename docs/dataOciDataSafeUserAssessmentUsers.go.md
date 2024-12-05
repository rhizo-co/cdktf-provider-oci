# `dataOciDataSafeUserAssessmentUsers` Submodule <a name="`dataOciDataSafeUserAssessmentUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentUsers <a name="DataOciDataSafeUserAssessmentUsers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users oci_data_safe_user_assessment_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

dataocidatasafeuserassessmentusers.NewDataOciDataSafeUserAssessmentUsers(scope Construct, id *string, config DataOciDataSafeUserAssessmentUsersConfig) DataOciDataSafeUserAssessmentUsers
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig">DataOciDataSafeUserAssessmentUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetAccountStatus` <a name="ResetAccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccountStatus"></a>

```go
func ResetAccountStatus()
```

##### `ResetAreAllSchemasAccessible` <a name="ResetAreAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAreAllSchemasAccessible"></a>

```go
func ResetAreAllSchemasAccessible()
```

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAuthenticationType"></a>

```go
func ResetAuthenticationType()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetId"></a>

```go
func ResetId()
```

##### `ResetSchemaList` <a name="ResetSchemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetSchemaList"></a>

```go
func ResetSchemaList()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTargetId"></a>

```go
func ResetTargetId()
```

##### `ResetTimeLastLoginGreaterThanOrEqualTo` <a name="ResetTimeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginGreaterThanOrEqualTo"></a>

```go
func ResetTimeLastLoginGreaterThanOrEqualTo()
```

##### `ResetTimeLastLoginLessThan` <a name="ResetTimeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginLessThan"></a>

```go
func ResetTimeLastLoginLessThan()
```

##### `ResetTimePasswordLastChangedGreaterThanOrEqualTo` <a name="ResetTimePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedGreaterThanOrEqualTo"></a>

```go
func ResetTimePasswordLastChangedGreaterThanOrEqualTo()
```

##### `ResetTimePasswordLastChangedLessThan` <a name="ResetTimePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedLessThan"></a>

```go
func ResetTimePasswordLastChangedLessThan()
```

##### `ResetTimeUserCreatedGreaterThanOrEqualTo` <a name="ResetTimeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedGreaterThanOrEqualTo"></a>

```go
func ResetTimeUserCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeUserCreatedLessThan` <a name="ResetTimeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedLessThan"></a>

```go
func ResetTimeUserCreatedLessThan()
```

##### `ResetUserCategory` <a name="ResetUserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserCategory"></a>

```go
func ResetUserCategory()
```

##### `ResetUserKey` <a name="ResetUserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserKey"></a>

```go
func ResetUserKey()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserName"></a>

```go
func ResetUserName()
```

##### `ResetUserProfile` <a name="ResetUserProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserProfile"></a>

```go
func ResetUserProfile()
```

##### `ResetUserRole` <a name="ResetUserRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserRole"></a>

```go
func ResetUserRole()
```

##### `ResetUserType` <a name="ResetUserType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserType"></a>

```go
func ResetUserType()
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

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

dataocidatasafeuserassessmentusers.DataOciDataSafeUserAssessmentUsers_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

dataocidatasafeuserassessmentusers.DataOciDataSafeUserAssessmentUsers_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

dataocidatasafeuserassessmentusers.DataOciDataSafeUserAssessmentUsers_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

dataocidatasafeuserassessmentusers.DataOciDataSafeUserAssessmentUsers_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeUserAssessmentUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeUserAssessmentUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList">DataOciDataSafeUserAssessmentUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.users">Users</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList">DataOciDataSafeUserAssessmentUsersUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatusInput">AccountStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessibleInput">AreAllSchemasAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaListInput">SchemaListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualToInput">TimeLastLoginGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThanInput">TimeLastLoginLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualToInput">TimePasswordLastChangedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThanInput">TimePasswordLastChangedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualToInput">TimeUserCreatedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThanInput">TimeUserCreatedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentIdInput">UserAssessmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategoryInput">UserCategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKeyInput">UserKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfileInput">UserProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRoleInput">UserRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userTypeInput">UserTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatus">AccountStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessible">AreAllSchemasAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaList">SchemaList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualTo">TimeLastLoginGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThan">TimeLastLoginLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualTo">TimePasswordLastChangedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThan">TimePasswordLastChangedLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualTo">TimeUserCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThan">TimeUserCreatedLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentId">UserAssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategory">UserCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKey">UserKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfile">UserProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRole">UserRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userType">UserType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filter"></a>

```go
func Filter() DataOciDataSafeUserAssessmentUsersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList">DataOciDataSafeUserAssessmentUsersFilterList</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.users"></a>

```go
func Users() DataOciDataSafeUserAssessmentUsersUsersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList">DataOciDataSafeUserAssessmentUsersUsersList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `AccountStatusInput`<sup>Optional</sup> <a name="AccountStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatusInput"></a>

```go
func AccountStatusInput() *string
```

- *Type:* *string

---

##### `AreAllSchemasAccessibleInput`<sup>Optional</sup> <a name="AreAllSchemasAccessibleInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessibleInput"></a>

```go
func AreAllSchemasAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SchemaListInput`<sup>Optional</sup> <a name="SchemaListInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaListInput"></a>

```go
func SchemaListInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `TimeLastLoginGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeLastLoginGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualToInput"></a>

```go
func TimeLastLoginGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeLastLoginLessThanInput`<sup>Optional</sup> <a name="TimeLastLoginLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThanInput"></a>

```go
func TimeLastLoginLessThanInput() *string
```

- *Type:* *string

---

##### `TimePasswordLastChangedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimePasswordLastChangedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualToInput"></a>

```go
func TimePasswordLastChangedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimePasswordLastChangedLessThanInput`<sup>Optional</sup> <a name="TimePasswordLastChangedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThanInput"></a>

```go
func TimePasswordLastChangedLessThanInput() *string
```

- *Type:* *string

---

##### `TimeUserCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeUserCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualToInput"></a>

```go
func TimeUserCreatedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeUserCreatedLessThanInput`<sup>Optional</sup> <a name="TimeUserCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThanInput"></a>

```go
func TimeUserCreatedLessThanInput() *string
```

- *Type:* *string

---

##### `UserAssessmentIdInput`<sup>Optional</sup> <a name="UserAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentIdInput"></a>

```go
func UserAssessmentIdInput() *string
```

- *Type:* *string

---

##### `UserCategoryInput`<sup>Optional</sup> <a name="UserCategoryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategoryInput"></a>

```go
func UserCategoryInput() *string
```

- *Type:* *string

---

##### `UserKeyInput`<sup>Optional</sup> <a name="UserKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKeyInput"></a>

```go
func UserKeyInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `UserProfileInput`<sup>Optional</sup> <a name="UserProfileInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfileInput"></a>

```go
func UserProfileInput() *string
```

- *Type:* *string

---

##### `UserRoleInput`<sup>Optional</sup> <a name="UserRoleInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRoleInput"></a>

```go
func UserRoleInput() *string
```

- *Type:* *string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userTypeInput"></a>

```go
func UserTypeInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `AccountStatus`<sup>Required</sup> <a name="AccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatus"></a>

```go
func AccountStatus() *string
```

- *Type:* *string

---

##### `AreAllSchemasAccessible`<sup>Required</sup> <a name="AreAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessible"></a>

```go
func AreAllSchemasAccessible() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SchemaList`<sup>Required</sup> <a name="SchemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaList"></a>

```go
func SchemaList() *[]*string
```

- *Type:* *[]*string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeLastLoginGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualTo"></a>

```go
func TimeLastLoginGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeLastLoginLessThan`<sup>Required</sup> <a name="TimeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThan"></a>

```go
func TimeLastLoginLessThan() *string
```

- *Type:* *string

---

##### `TimePasswordLastChangedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```go
func TimePasswordLastChangedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimePasswordLastChangedLessThan`<sup>Required</sup> <a name="TimePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThan"></a>

```go
func TimePasswordLastChangedLessThan() *string
```

- *Type:* *string

---

##### `TimeUserCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```go
func TimeUserCreatedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeUserCreatedLessThan`<sup>Required</sup> <a name="TimeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThan"></a>

```go
func TimeUserCreatedLessThan() *string
```

- *Type:* *string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentId"></a>

```go
func UserAssessmentId() *string
```

- *Type:* *string

---

##### `UserCategory`<sup>Required</sup> <a name="UserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategory"></a>

```go
func UserCategory() *string
```

- *Type:* *string

---

##### `UserKey`<sup>Required</sup> <a name="UserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKey"></a>

```go
func UserKey() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `UserProfile`<sup>Required</sup> <a name="UserProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfile"></a>

```go
func UserProfile() *string
```

- *Type:* *string

---

##### `UserRole`<sup>Required</sup> <a name="UserRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRole"></a>

```go
func UserRole() *string
```

- *Type:* *string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userType"></a>

```go
func UserType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentUsersConfig <a name="DataOciDataSafeUserAssessmentUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

&dataocidatasafeuserassessmentusers.DataOciDataSafeUserAssessmentUsersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	UserAssessmentId: *string,
	AccessLevel: *string,
	AccountStatus: *string,
	AreAllSchemasAccessible: interface{},
	AuthenticationType: *string,
	CompartmentIdInSubtree: interface{},
	Filter: interface{},
	Id: *string,
	SchemaList: *[]*string,
	TargetId: *string,
	TimeLastLoginGreaterThanOrEqualTo: *string,
	TimeLastLoginLessThan: *string,
	TimePasswordLastChangedGreaterThanOrEqualTo: *string,
	TimePasswordLastChangedLessThan: *string,
	TimeUserCreatedGreaterThanOrEqualTo: *string,
	TimeUserCreatedLessThan: *string,
	UserCategory: *string,
	UserKey: *string,
	UserName: *string,
	UserProfile: *string,
	UserRole: *string,
	UserType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userAssessmentId">UserAssessmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_assessment_id DataOciDataSafeUserAssessmentUsers#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#access_level DataOciDataSafeUserAssessmentUsers#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accountStatus">AccountStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#account_status DataOciDataSafeUserAssessmentUsers#account_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.areAllSchemasAccessible">AreAllSchemasAccessible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#are_all_schemas_accessible DataOciDataSafeUserAssessmentUsers#are_all_schemas_accessible}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#authentication_type DataOciDataSafeUserAssessmentUsers#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#compartment_id_in_subtree DataOciDataSafeUserAssessmentUsers#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#id DataOciDataSafeUserAssessmentUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.schemaList">SchemaList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#schema_list DataOciDataSafeUserAssessmentUsers#schema_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#target_id DataOciDataSafeUserAssessmentUsers#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginGreaterThanOrEqualTo">TimeLastLoginGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_last_login_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginLessThan">TimeLastLoginLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_less_than DataOciDataSafeUserAssessmentUsers#time_last_login_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedGreaterThanOrEqualTo">TimePasswordLastChangedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_last_changed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedLessThan">TimePasswordLastChangedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUsers#time_password_last_changed_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedGreaterThanOrEqualTo">TimeUserCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_user_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedLessThan">TimeUserCreatedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_less_than DataOciDataSafeUserAssessmentUsers#time_user_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userCategory">UserCategory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_category DataOciDataSafeUserAssessmentUsers#user_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userKey">UserKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_key DataOciDataSafeUserAssessmentUsers#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_name DataOciDataSafeUserAssessmentUsers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userProfile">UserProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_profile DataOciDataSafeUserAssessmentUsers#user_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userRole">UserRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_role DataOciDataSafeUserAssessmentUsers#user_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userType">UserType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_type DataOciDataSafeUserAssessmentUsers#user_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userAssessmentId"></a>

```go
UserAssessmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_assessment_id DataOciDataSafeUserAssessmentUsers#user_assessment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#access_level DataOciDataSafeUserAssessmentUsers#access_level}.

---

##### `AccountStatus`<sup>Optional</sup> <a name="AccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accountStatus"></a>

```go
AccountStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#account_status DataOciDataSafeUserAssessmentUsers#account_status}.

---

##### `AreAllSchemasAccessible`<sup>Optional</sup> <a name="AreAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.areAllSchemasAccessible"></a>

```go
AreAllSchemasAccessible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#are_all_schemas_accessible DataOciDataSafeUserAssessmentUsers#are_all_schemas_accessible}.

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#authentication_type DataOciDataSafeUserAssessmentUsers#authentication_type}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#compartment_id_in_subtree DataOciDataSafeUserAssessmentUsers#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#filter DataOciDataSafeUserAssessmentUsers#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#id DataOciDataSafeUserAssessmentUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SchemaList`<sup>Optional</sup> <a name="SchemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.schemaList"></a>

```go
SchemaList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#schema_list DataOciDataSafeUserAssessmentUsers#schema_list}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#target_id DataOciDataSafeUserAssessmentUsers#target_id}.

---

##### `TimeLastLoginGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginGreaterThanOrEqualTo"></a>

```go
TimeLastLoginGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_last_login_greater_than_or_equal_to}.

---

##### `TimeLastLoginLessThan`<sup>Optional</sup> <a name="TimeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginLessThan"></a>

```go
TimeLastLoginLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_less_than DataOciDataSafeUserAssessmentUsers#time_last_login_less_than}.

---

##### `TimePasswordLastChangedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```go
TimePasswordLastChangedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_last_changed_greater_than_or_equal_to}.

---

##### `TimePasswordLastChangedLessThan`<sup>Optional</sup> <a name="TimePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedLessThan"></a>

```go
TimePasswordLastChangedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUsers#time_password_last_changed_less_than}.

---

##### `TimeUserCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```go
TimeUserCreatedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_user_created_greater_than_or_equal_to}.

---

##### `TimeUserCreatedLessThan`<sup>Optional</sup> <a name="TimeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedLessThan"></a>

```go
TimeUserCreatedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_less_than DataOciDataSafeUserAssessmentUsers#time_user_created_less_than}.

---

##### `UserCategory`<sup>Optional</sup> <a name="UserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userCategory"></a>

```go
UserCategory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_category DataOciDataSafeUserAssessmentUsers#user_category}.

---

##### `UserKey`<sup>Optional</sup> <a name="UserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userKey"></a>

```go
UserKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_key DataOciDataSafeUserAssessmentUsers#user_key}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_name DataOciDataSafeUserAssessmentUsers#user_name}.

---

##### `UserProfile`<sup>Optional</sup> <a name="UserProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userProfile"></a>

```go
UserProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_profile DataOciDataSafeUserAssessmentUsers#user_profile}.

---

##### `UserRole`<sup>Optional</sup> <a name="UserRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userRole"></a>

```go
UserRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_role DataOciDataSafeUserAssessmentUsers#user_role}.

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userType"></a>

```go
UserType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_type DataOciDataSafeUserAssessmentUsers#user_type}.

---

### DataOciDataSafeUserAssessmentUsersFilter <a name="DataOciDataSafeUserAssessmentUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

&dataocidatasafeuserassessmentusers.DataOciDataSafeUserAssessmentUsersFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#name DataOciDataSafeUserAssessmentUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#values DataOciDataSafeUserAssessmentUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#regex DataOciDataSafeUserAssessmentUsers#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#name DataOciDataSafeUserAssessmentUsers#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#values DataOciDataSafeUserAssessmentUsers#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#regex DataOciDataSafeUserAssessmentUsers#regex}.

---

### DataOciDataSafeUserAssessmentUsersUsers <a name="DataOciDataSafeUserAssessmentUsersUsers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

&dataocidatasafeuserassessmentusers.DataOciDataSafeUserAssessmentUsersUsers {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentUsersFilterList <a name="DataOciDataSafeUserAssessmentUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

dataocidatasafeuserassessmentusers.NewDataOciDataSafeUserAssessmentUsersFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeUserAssessmentUsersFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeUserAssessmentUsersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeUserAssessmentUsersFilterOutputReference <a name="DataOciDataSafeUserAssessmentUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

dataocidatasafeuserassessmentusers.NewDataOciDataSafeUserAssessmentUsersFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeUserAssessmentUsersFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeUserAssessmentUsersUsersList <a name="DataOciDataSafeUserAssessmentUsersUsersList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

dataocidatasafeuserassessmentusers.NewDataOciDataSafeUserAssessmentUsersUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeUserAssessmentUsersUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.get"></a>

```go
func Get(index *f64) DataOciDataSafeUserAssessmentUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeUserAssessmentUsersUsersOutputReference <a name="DataOciDataSafeUserAssessmentUsersUsersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentusers"

dataocidatasafeuserassessmentusers.NewDataOciDataSafeUserAssessmentUsersUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeUserAssessmentUsersUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.accountStatus">AccountStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.adminRoles">AdminRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.areAllSchemasAccessible">AreAllSchemasAccessible</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.schemaList">SchemaList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeLastLogin">TimeLastLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timePasswordChanged">TimePasswordChanged</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeUserCreated">TimeUserCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userCategory">UserCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userProfile">UserProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userTypes">UserTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers">DataOciDataSafeUserAssessmentUsersUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountStatus`<sup>Required</sup> <a name="AccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.accountStatus"></a>

```go
func AccountStatus() *string
```

- *Type:* *string

---

##### `AdminRoles`<sup>Required</sup> <a name="AdminRoles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.adminRoles"></a>

```go
func AdminRoles() *[]*string
```

- *Type:* *[]*string

---

##### `AreAllSchemasAccessible`<sup>Required</sup> <a name="AreAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.areAllSchemasAccessible"></a>

```go
func AreAllSchemasAccessible() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `SchemaList`<sup>Required</sup> <a name="SchemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.schemaList"></a>

```go
func SchemaList() *[]*string
```

- *Type:* *[]*string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeLastLogin`<sup>Required</sup> <a name="TimeLastLogin" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeLastLogin"></a>

```go
func TimeLastLogin() *string
```

- *Type:* *string

---

##### `TimePasswordChanged`<sup>Required</sup> <a name="TimePasswordChanged" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timePasswordChanged"></a>

```go
func TimePasswordChanged() *string
```

- *Type:* *string

---

##### `TimeUserCreated`<sup>Required</sup> <a name="TimeUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeUserCreated"></a>

```go
func TimeUserCreated() *string
```

- *Type:* *string

---

##### `UserCategory`<sup>Required</sup> <a name="UserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userCategory"></a>

```go
func UserCategory() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `UserProfile`<sup>Required</sup> <a name="UserProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userProfile"></a>

```go
func UserProfile() *string
```

- *Type:* *string

---

##### `UserTypes`<sup>Required</sup> <a name="UserTypes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userTypes"></a>

```go
func UserTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeUserAssessmentUsersUsers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers">DataOciDataSafeUserAssessmentUsersUsers</a>

---



