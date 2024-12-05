# `identityDomainsIdentitySetting` Submodule <a name="`identityDomainsIdentitySetting` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsIdentitySetting <a name="IdentityDomainsIdentitySetting" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting oci_identity_domains_identity_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySetting(scope Construct, id *string, config IdentityDomainsIdentitySettingConfig) IdentityDomainsIdentitySetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig">IdentityDomainsIdentitySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig">IdentityDomainsIdentitySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile">PutMyProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid">PutPosixGid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid">PutPosixUid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens">PutTokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetEmitLockedMessageWhenUserIsLocked">ResetEmitLockedMessageWhenUserIsLocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetMyProfile">ResetMyProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixGid">ResetPosixGid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixUid">ResetPosixUid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPrimaryEmailRequired">ResetPrimaryEmailRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetReturnInactiveOverLockedMessage">ResetReturnInactiveOverLockedMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTokens">ResetTokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetUserAllowedToSetRecoveryEmail">ResetUserAllowedToSetRecoveryEmail</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMyProfile` <a name="PutMyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile"></a>

```go
func PutMyProfile(value IdentityDomainsIdentitySettingMyProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

---

##### `PutPosixGid` <a name="PutPosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid"></a>

```go
func PutPosixGid(value IdentityDomainsIdentitySettingPosixGid)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

---

##### `PutPosixUid` <a name="PutPosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid"></a>

```go
func PutPosixUid(value IdentityDomainsIdentitySettingPosixUid)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts"></a>

```go
func PutTimeouts(value IdentityDomainsIdentitySettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

---

##### `PutTokens` <a name="PutTokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens"></a>

```go
func PutTokens(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetEmitLockedMessageWhenUserIsLocked` <a name="ResetEmitLockedMessageWhenUserIsLocked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetEmitLockedMessageWhenUserIsLocked"></a>

```go
func ResetEmitLockedMessageWhenUserIsLocked()
```

##### `ResetExternalId` <a name="ResetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetMyProfile` <a name="ResetMyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetMyProfile"></a>

```go
func ResetMyProfile()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOcid"></a>

```go
func ResetOcid()
```

##### `ResetPosixGid` <a name="ResetPosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixGid"></a>

```go
func ResetPosixGid()
```

##### `ResetPosixUid` <a name="ResetPosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixUid"></a>

```go
func ResetPosixUid()
```

##### `ResetPrimaryEmailRequired` <a name="ResetPrimaryEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPrimaryEmailRequired"></a>

```go
func ResetPrimaryEmailRequired()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetReturnInactiveOverLockedMessage` <a name="ResetReturnInactiveOverLockedMessage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetReturnInactiveOverLockedMessage"></a>

```go
func ResetReturnInactiveOverLockedMessage()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTokens` <a name="ResetTokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTokens"></a>

```go
func ResetTokens()
```

##### `ResetUserAllowedToSetRecoveryEmail` <a name="ResetUserAllowedToSetRecoveryEmail" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetUserAllowedToSetRecoveryEmail"></a>

```go
func ResetUserAllowedToSetRecoveryEmail()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsIdentitySetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.IdentityDomainsIdentitySetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.IdentityDomainsIdentitySetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.IdentityDomainsIdentitySetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.IdentityDomainsIdentitySetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityDomainsIdentitySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityDomainsIdentitySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityDomainsIdentitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsIdentitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList">IdentityDomainsIdentitySettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList">IdentityDomainsIdentitySettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList">IdentityDomainsIdentitySettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfile">MyProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference">IdentityDomainsIdentitySettingMyProfileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGid">PosixGid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference">IdentityDomainsIdentitySettingPosixGidOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUid">PosixUid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference">IdentityDomainsIdentitySettingPosixUidOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.removeInvalidEmails">RemoveInvalidEmails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList">IdentityDomainsIdentitySettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference">IdentityDomainsIdentitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokens">Tokens</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList">IdentityDomainsIdentitySettingTokensList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLockedInput">EmitLockedMessageWhenUserIsLockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingIdInput">IdentitySettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfileInput">MyProfileInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocidInput">OcidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGidInput">PosixGidInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUidInput">PosixUidInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequiredInput">PrimaryEmailRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessageInput">ReturnInactiveOverLockedMessageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemasInput">SchemasInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokensInput">TokensInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmailInput">UserAllowedToSetRecoveryEmailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLocked">EmitLockedMessageWhenUserIsLocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingId">IdentitySettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequired">PrimaryEmailRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessage">ReturnInactiveOverLockedMessage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmail">UserAllowedToSetRecoveryEmail</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() IdentityDomainsIdentitySettingIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList">IdentityDomainsIdentitySettingIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() IdentityDomainsIdentitySettingIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList">IdentityDomainsIdentitySettingIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.meta"></a>

```go
func Meta() IdentityDomainsIdentitySettingMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList">IdentityDomainsIdentitySettingMetaList</a>

---

##### `MyProfile`<sup>Required</sup> <a name="MyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfile"></a>

```go
func MyProfile() IdentityDomainsIdentitySettingMyProfileOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference">IdentityDomainsIdentitySettingMyProfileOutputReference</a>

---

##### `PosixGid`<sup>Required</sup> <a name="PosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGid"></a>

```go
func PosixGid() IdentityDomainsIdentitySettingPosixGidOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference">IdentityDomainsIdentitySettingPosixGidOutputReference</a>

---

##### `PosixUid`<sup>Required</sup> <a name="PosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUid"></a>

```go
func PosixUid() IdentityDomainsIdentitySettingPosixUidOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference">IdentityDomainsIdentitySettingPosixUidOutputReference</a>

---

##### `RemoveInvalidEmails`<sup>Required</sup> <a name="RemoveInvalidEmails" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.removeInvalidEmails"></a>

```go
func RemoveInvalidEmails() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tags"></a>

```go
func Tags() IdentityDomainsIdentitySettingTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList">IdentityDomainsIdentitySettingTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeouts"></a>

```go
func Timeouts() IdentityDomainsIdentitySettingTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference">IdentityDomainsIdentitySettingTimeoutsOutputReference</a>

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokens"></a>

```go
func Tokens() IdentityDomainsIdentitySettingTokensList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList">IdentityDomainsIdentitySettingTokensList</a>

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `EmitLockedMessageWhenUserIsLockedInput`<sup>Optional</sup> <a name="EmitLockedMessageWhenUserIsLockedInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLockedInput"></a>

```go
func EmitLockedMessageWhenUserIsLockedInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdentitySettingIdInput`<sup>Optional</sup> <a name="IdentitySettingIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingIdInput"></a>

```go
func IdentitySettingIdInput() *string
```

- *Type:* *string

---

##### `MyProfileInput`<sup>Optional</sup> <a name="MyProfileInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfileInput"></a>

```go
func MyProfileInput() IdentityDomainsIdentitySettingMyProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocidInput"></a>

```go
func OcidInput() *string
```

- *Type:* *string

---

##### `PosixGidInput`<sup>Optional</sup> <a name="PosixGidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGidInput"></a>

```go
func PosixGidInput() IdentityDomainsIdentitySettingPosixGid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

---

##### `PosixUidInput`<sup>Optional</sup> <a name="PosixUidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUidInput"></a>

```go
func PosixUidInput() IdentityDomainsIdentitySettingPosixUid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

---

##### `PrimaryEmailRequiredInput`<sup>Optional</sup> <a name="PrimaryEmailRequiredInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequiredInput"></a>

```go
func PrimaryEmailRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `ReturnInactiveOverLockedMessageInput`<sup>Optional</sup> <a name="ReturnInactiveOverLockedMessageInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessageInput"></a>

```go
func ReturnInactiveOverLockedMessageInput() interface{}
```

- *Type:* interface{}

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemasInput"></a>

```go
func SchemasInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokensInput"></a>

```go
func TokensInput() interface{}
```

- *Type:* interface{}

---

##### `UserAllowedToSetRecoveryEmailInput`<sup>Optional</sup> <a name="UserAllowedToSetRecoveryEmailInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmailInput"></a>

```go
func UserAllowedToSetRecoveryEmailInput() interface{}
```

- *Type:* interface{}

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `EmitLockedMessageWhenUserIsLocked`<sup>Required</sup> <a name="EmitLockedMessageWhenUserIsLocked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLocked"></a>

```go
func EmitLockedMessageWhenUserIsLocked() interface{}
```

- *Type:* interface{}

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdentitySettingId`<sup>Required</sup> <a name="IdentitySettingId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingId"></a>

```go
func IdentitySettingId() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `PrimaryEmailRequired`<sup>Required</sup> <a name="PrimaryEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequired"></a>

```go
func PrimaryEmailRequired() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `ReturnInactiveOverLockedMessage`<sup>Required</sup> <a name="ReturnInactiveOverLockedMessage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessage"></a>

```go
func ReturnInactiveOverLockedMessage() interface{}
```

- *Type:* interface{}

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `UserAllowedToSetRecoveryEmail`<sup>Required</sup> <a name="UserAllowedToSetRecoveryEmail" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmail"></a>

```go
func UserAllowedToSetRecoveryEmail() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsIdentitySettingConfig <a name="IdentityDomainsIdentitySettingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

&identitydomainsidentitysetting.IdentityDomainsIdentitySettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	IdentitySettingId: *string,
	Schemas: *[]*string,
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	EmitLockedMessageWhenUserIsLocked: interface{},
	ExternalId: *string,
	MyProfile: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile,
	Ocid: *string,
	PosixGid: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid,
	PosixUid: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid,
	PrimaryEmailRequired: interface{},
	ResourceTypeSchemaVersion: *string,
	ReturnInactiveOverLockedMessage: interface{},
	Tags: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts,
	Tokens: interface{},
	UserAllowedToSetRecoveryEmail: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.identitySettingId">IdentitySettingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.schemas">Schemas</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.emitLockedMessageWhenUserIsLocked">EmitLockedMessageWhenUserIsLocked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.myProfile">MyProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | my_profile block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.ocid">Ocid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixGid">PosixGid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | posix_gid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixUid">PosixUid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | posix_uid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.primaryEmailRequired">PrimaryEmailRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.returnInactiveOverLockedMessage">ReturnInactiveOverLockedMessage</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tokens">Tokens</a></code> | <code>interface{}</code> | tokens block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.userAllowedToSetRecoveryEmail">UserAllowedToSetRecoveryEmail</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}.

---

##### `IdentitySettingId`<sup>Required</sup> <a name="IdentitySettingId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.identitySettingId"></a>

```go
IdentitySettingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.schemas"></a>

```go
Schemas *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}.

---

##### `EmitLockedMessageWhenUserIsLocked`<sup>Optional</sup> <a name="EmitLockedMessageWhenUserIsLocked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.emitLockedMessageWhenUserIsLocked"></a>

```go
EmitLockedMessageWhenUserIsLocked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}.

---

##### `MyProfile`<sup>Optional</sup> <a name="MyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.myProfile"></a>

```go
MyProfile IdentityDomainsIdentitySettingMyProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

my_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#my_profile IdentityDomainsIdentitySetting#my_profile}

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.ocid"></a>

```go
Ocid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}.

---

##### `PosixGid`<sup>Optional</sup> <a name="PosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixGid"></a>

```go
PosixGid IdentityDomainsIdentitySettingPosixGid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

posix_gid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_gid IdentityDomainsIdentitySetting#posix_gid}

---

##### `PosixUid`<sup>Optional</sup> <a name="PosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixUid"></a>

```go
PosixUid IdentityDomainsIdentitySettingPosixUid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

posix_uid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_uid IdentityDomainsIdentitySetting#posix_uid}

---

##### `PrimaryEmailRequired`<sup>Optional</sup> <a name="PrimaryEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.primaryEmailRequired"></a>

```go
PrimaryEmailRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}.

---

##### `ReturnInactiveOverLockedMessage`<sup>Optional</sup> <a name="ReturnInactiveOverLockedMessage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.returnInactiveOverLockedMessage"></a>

```go
ReturnInactiveOverLockedMessage interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tags IdentityDomainsIdentitySetting#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.timeouts"></a>

```go
Timeouts IdentityDomainsIdentitySettingTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#timeouts IdentityDomainsIdentitySetting#timeouts}

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tokens"></a>

```go
Tokens interface{}
```

- *Type:* interface{}

tokens block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tokens IdentityDomainsIdentitySetting#tokens}

---

##### `UserAllowedToSetRecoveryEmail`<sup>Optional</sup> <a name="UserAllowedToSetRecoveryEmail" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.userAllowedToSetRecoveryEmail"></a>

```go
UserAllowedToSetRecoveryEmail interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}.

---

### IdentityDomainsIdentitySettingIdcsCreatedBy <a name="IdentityDomainsIdentitySettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

&identitydomainsidentitysetting.IdentityDomainsIdentitySettingIdcsCreatedBy {

}
```


### IdentityDomainsIdentitySettingIdcsLastModifiedBy <a name="IdentityDomainsIdentitySettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

&identitydomainsidentitysetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy {

}
```


### IdentityDomainsIdentitySettingMeta <a name="IdentityDomainsIdentitySettingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

&identitydomainsidentitysetting.IdentityDomainsIdentitySettingMeta {

}
```


### IdentityDomainsIdentitySettingMyProfile <a name="IdentityDomainsIdentitySettingMyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

&identitydomainsidentitysetting.IdentityDomainsIdentitySettingMyProfile {
	AllowEndUsersToChangeTheirPassword: interface{},
	AllowEndUsersToLinkTheirSupportAccount: interface{},
	AllowEndUsersToManageTheirCapabilities: interface{},
	AllowEndUsersToUpdateTheirSecuritySettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToChangeTheirPassword">AllowEndUsersToChangeTheirPassword</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_change_their_password IdentityDomainsIdentitySetting#allow_end_users_to_change_their_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToLinkTheirSupportAccount">AllowEndUsersToLinkTheirSupportAccount</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_link_their_support_account IdentityDomainsIdentitySetting#allow_end_users_to_link_their_support_account}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToManageTheirCapabilities">AllowEndUsersToManageTheirCapabilities</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_manage_their_capabilities IdentityDomainsIdentitySetting#allow_end_users_to_manage_their_capabilities}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToUpdateTheirSecuritySettings">AllowEndUsersToUpdateTheirSecuritySettings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_update_their_security_settings IdentityDomainsIdentitySetting#allow_end_users_to_update_their_security_settings}. |

---

##### `AllowEndUsersToChangeTheirPassword`<sup>Optional</sup> <a name="AllowEndUsersToChangeTheirPassword" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToChangeTheirPassword"></a>

```go
AllowEndUsersToChangeTheirPassword interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_change_their_password IdentityDomainsIdentitySetting#allow_end_users_to_change_their_password}.

---

##### `AllowEndUsersToLinkTheirSupportAccount`<sup>Optional</sup> <a name="AllowEndUsersToLinkTheirSupportAccount" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToLinkTheirSupportAccount"></a>

```go
AllowEndUsersToLinkTheirSupportAccount interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_link_their_support_account IdentityDomainsIdentitySetting#allow_end_users_to_link_their_support_account}.

---

##### `AllowEndUsersToManageTheirCapabilities`<sup>Optional</sup> <a name="AllowEndUsersToManageTheirCapabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToManageTheirCapabilities"></a>

```go
AllowEndUsersToManageTheirCapabilities interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_manage_their_capabilities IdentityDomainsIdentitySetting#allow_end_users_to_manage_their_capabilities}.

---

##### `AllowEndUsersToUpdateTheirSecuritySettings`<sup>Optional</sup> <a name="AllowEndUsersToUpdateTheirSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToUpdateTheirSecuritySettings"></a>

```go
AllowEndUsersToUpdateTheirSecuritySettings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_update_their_security_settings IdentityDomainsIdentitySetting#allow_end_users_to_update_their_security_settings}.

---

### IdentityDomainsIdentitySettingPosixGid <a name="IdentityDomainsIdentitySettingPosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

&identitydomainsidentitysetting.IdentityDomainsIdentitySettingPosixGid {
	ManualAssignmentEndsAt: *f64,
	ManualAssignmentStartsFrom: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentEndsAt">ManualAssignmentEndsAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentStartsFrom">ManualAssignmentStartsFrom</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}. |

---

##### `ManualAssignmentEndsAt`<sup>Optional</sup> <a name="ManualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentEndsAt"></a>

```go
ManualAssignmentEndsAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}.

---

##### `ManualAssignmentStartsFrom`<sup>Optional</sup> <a name="ManualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentStartsFrom"></a>

```go
ManualAssignmentStartsFrom *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}.

---

### IdentityDomainsIdentitySettingPosixUid <a name="IdentityDomainsIdentitySettingPosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

&identitydomainsidentitysetting.IdentityDomainsIdentitySettingPosixUid {
	ManualAssignmentEndsAt: *f64,
	ManualAssignmentStartsFrom: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentEndsAt">ManualAssignmentEndsAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentStartsFrom">ManualAssignmentStartsFrom</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}. |

---

##### `ManualAssignmentEndsAt`<sup>Optional</sup> <a name="ManualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentEndsAt"></a>

```go
ManualAssignmentEndsAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}.

---

##### `ManualAssignmentStartsFrom`<sup>Optional</sup> <a name="ManualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentStartsFrom"></a>

```go
ManualAssignmentStartsFrom *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}.

---

### IdentityDomainsIdentitySettingTags <a name="IdentityDomainsIdentitySettingTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

&identitydomainsidentitysetting.IdentityDomainsIdentitySettingTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#key IdentityDomainsIdentitySetting#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#value IdentityDomainsIdentitySetting#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#key IdentityDomainsIdentitySetting#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#value IdentityDomainsIdentitySetting#value}.

---

### IdentityDomainsIdentitySettingTimeouts <a name="IdentityDomainsIdentitySettingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

&identitydomainsidentitysetting.IdentityDomainsIdentitySettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#create IdentityDomainsIdentitySetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#delete IdentityDomainsIdentitySetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#update IdentityDomainsIdentitySetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#create IdentityDomainsIdentitySetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#delete IdentityDomainsIdentitySetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#update IdentityDomainsIdentitySetting#update}.

---

### IdentityDomainsIdentitySettingTokens <a name="IdentityDomainsIdentitySettingTokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

&identitydomainsidentitysetting.IdentityDomainsIdentitySettingTokens {
	Type: *string,
	ExpiresAfter: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#type IdentityDomainsIdentitySetting#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.expiresAfter">ExpiresAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#expires_after IdentityDomainsIdentitySetting#expires_after}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#type IdentityDomainsIdentitySetting#type}.

---

##### `ExpiresAfter`<sup>Optional</sup> <a name="ExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.expiresAfter"></a>

```go
ExpiresAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#expires_after IdentityDomainsIdentitySetting#expires_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsIdentitySettingIdcsCreatedByList <a name="IdentityDomainsIdentitySettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsIdentitySettingIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get"></a>

```go
func Get(index *f64) IdentityDomainsIdentitySettingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsIdentitySettingIdcsCreatedByOutputReference <a name="IdentityDomainsIdentitySettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsIdentitySettingIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy">IdentityDomainsIdentitySettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsIdentitySettingIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy">IdentityDomainsIdentitySettingIdcsCreatedBy</a>

---


### IdentityDomainsIdentitySettingIdcsLastModifiedByList <a name="IdentityDomainsIdentitySettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsIdentitySettingIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference <a name="IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy">IdentityDomainsIdentitySettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsIdentitySettingIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy">IdentityDomainsIdentitySettingIdcsLastModifiedBy</a>

---


### IdentityDomainsIdentitySettingMetaList <a name="IdentityDomainsIdentitySettingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsIdentitySettingMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get"></a>

```go
func Get(index *f64) IdentityDomainsIdentitySettingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsIdentitySettingMetaOutputReference <a name="IdentityDomainsIdentitySettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsIdentitySettingMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta">IdentityDomainsIdentitySettingMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsIdentitySettingMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta">IdentityDomainsIdentitySettingMeta</a>

---


### IdentityDomainsIdentitySettingMyProfileOutputReference <a name="IdentityDomainsIdentitySettingMyProfileOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingMyProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsIdentitySettingMyProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToChangeTheirPassword">ResetAllowEndUsersToChangeTheirPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToLinkTheirSupportAccount">ResetAllowEndUsersToLinkTheirSupportAccount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToManageTheirCapabilities">ResetAllowEndUsersToManageTheirCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToUpdateTheirSecuritySettings">ResetAllowEndUsersToUpdateTheirSecuritySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowEndUsersToChangeTheirPassword` <a name="ResetAllowEndUsersToChangeTheirPassword" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToChangeTheirPassword"></a>

```go
func ResetAllowEndUsersToChangeTheirPassword()
```

##### `ResetAllowEndUsersToLinkTheirSupportAccount` <a name="ResetAllowEndUsersToLinkTheirSupportAccount" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToLinkTheirSupportAccount"></a>

```go
func ResetAllowEndUsersToLinkTheirSupportAccount()
```

##### `ResetAllowEndUsersToManageTheirCapabilities` <a name="ResetAllowEndUsersToManageTheirCapabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToManageTheirCapabilities"></a>

```go
func ResetAllowEndUsersToManageTheirCapabilities()
```

##### `ResetAllowEndUsersToUpdateTheirSecuritySettings` <a name="ResetAllowEndUsersToUpdateTheirSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToUpdateTheirSecuritySettings"></a>

```go
func ResetAllowEndUsersToUpdateTheirSecuritySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPasswordInput">AllowEndUsersToChangeTheirPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccountInput">AllowEndUsersToLinkTheirSupportAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilitiesInput">AllowEndUsersToManageTheirCapabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettingsInput">AllowEndUsersToUpdateTheirSecuritySettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword">AllowEndUsersToChangeTheirPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount">AllowEndUsersToLinkTheirSupportAccount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities">AllowEndUsersToManageTheirCapabilities</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings">AllowEndUsersToUpdateTheirSecuritySettings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowEndUsersToChangeTheirPasswordInput`<sup>Optional</sup> <a name="AllowEndUsersToChangeTheirPasswordInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPasswordInput"></a>

```go
func AllowEndUsersToChangeTheirPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `AllowEndUsersToLinkTheirSupportAccountInput`<sup>Optional</sup> <a name="AllowEndUsersToLinkTheirSupportAccountInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccountInput"></a>

```go
func AllowEndUsersToLinkTheirSupportAccountInput() interface{}
```

- *Type:* interface{}

---

##### `AllowEndUsersToManageTheirCapabilitiesInput`<sup>Optional</sup> <a name="AllowEndUsersToManageTheirCapabilitiesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilitiesInput"></a>

```go
func AllowEndUsersToManageTheirCapabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowEndUsersToUpdateTheirSecuritySettingsInput`<sup>Optional</sup> <a name="AllowEndUsersToUpdateTheirSecuritySettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettingsInput"></a>

```go
func AllowEndUsersToUpdateTheirSecuritySettingsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowEndUsersToChangeTheirPassword`<sup>Required</sup> <a name="AllowEndUsersToChangeTheirPassword" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword"></a>

```go
func AllowEndUsersToChangeTheirPassword() interface{}
```

- *Type:* interface{}

---

##### `AllowEndUsersToLinkTheirSupportAccount`<sup>Required</sup> <a name="AllowEndUsersToLinkTheirSupportAccount" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount"></a>

```go
func AllowEndUsersToLinkTheirSupportAccount() interface{}
```

- *Type:* interface{}

---

##### `AllowEndUsersToManageTheirCapabilities`<sup>Required</sup> <a name="AllowEndUsersToManageTheirCapabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities"></a>

```go
func AllowEndUsersToManageTheirCapabilities() interface{}
```

- *Type:* interface{}

---

##### `AllowEndUsersToUpdateTheirSecuritySettings`<sup>Required</sup> <a name="AllowEndUsersToUpdateTheirSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings"></a>

```go
func AllowEndUsersToUpdateTheirSecuritySettings() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsIdentitySettingMyProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

---


### IdentityDomainsIdentitySettingPosixGidOutputReference <a name="IdentityDomainsIdentitySettingPosixGidOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingPosixGidOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsIdentitySettingPosixGidOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentEndsAt">ResetManualAssignmentEndsAt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentStartsFrom">ResetManualAssignmentStartsFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManualAssignmentEndsAt` <a name="ResetManualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentEndsAt"></a>

```go
func ResetManualAssignmentEndsAt()
```

##### `ResetManualAssignmentStartsFrom` <a name="ResetManualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentStartsFrom"></a>

```go
func ResetManualAssignmentStartsFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAtInput">ManualAssignmentEndsAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFromInput">ManualAssignmentStartsFromInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAt">ManualAssignmentEndsAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFrom">ManualAssignmentStartsFrom</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManualAssignmentEndsAtInput`<sup>Optional</sup> <a name="ManualAssignmentEndsAtInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAtInput"></a>

```go
func ManualAssignmentEndsAtInput() *f64
```

- *Type:* *f64

---

##### `ManualAssignmentStartsFromInput`<sup>Optional</sup> <a name="ManualAssignmentStartsFromInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFromInput"></a>

```go
func ManualAssignmentStartsFromInput() *f64
```

- *Type:* *f64

---

##### `ManualAssignmentEndsAt`<sup>Required</sup> <a name="ManualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAt"></a>

```go
func ManualAssignmentEndsAt() *f64
```

- *Type:* *f64

---

##### `ManualAssignmentStartsFrom`<sup>Required</sup> <a name="ManualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFrom"></a>

```go
func ManualAssignmentStartsFrom() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsIdentitySettingPosixGid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

---


### IdentityDomainsIdentitySettingPosixUidOutputReference <a name="IdentityDomainsIdentitySettingPosixUidOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingPosixUidOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsIdentitySettingPosixUidOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentEndsAt">ResetManualAssignmentEndsAt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentStartsFrom">ResetManualAssignmentStartsFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManualAssignmentEndsAt` <a name="ResetManualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentEndsAt"></a>

```go
func ResetManualAssignmentEndsAt()
```

##### `ResetManualAssignmentStartsFrom` <a name="ResetManualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentStartsFrom"></a>

```go
func ResetManualAssignmentStartsFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAtInput">ManualAssignmentEndsAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFromInput">ManualAssignmentStartsFromInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAt">ManualAssignmentEndsAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFrom">ManualAssignmentStartsFrom</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManualAssignmentEndsAtInput`<sup>Optional</sup> <a name="ManualAssignmentEndsAtInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAtInput"></a>

```go
func ManualAssignmentEndsAtInput() *f64
```

- *Type:* *f64

---

##### `ManualAssignmentStartsFromInput`<sup>Optional</sup> <a name="ManualAssignmentStartsFromInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFromInput"></a>

```go
func ManualAssignmentStartsFromInput() *f64
```

- *Type:* *f64

---

##### `ManualAssignmentEndsAt`<sup>Required</sup> <a name="ManualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAt"></a>

```go
func ManualAssignmentEndsAt() *f64
```

- *Type:* *f64

---

##### `ManualAssignmentStartsFrom`<sup>Required</sup> <a name="ManualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFrom"></a>

```go
func ManualAssignmentStartsFrom() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsIdentitySettingPosixUid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

---


### IdentityDomainsIdentitySettingTagsList <a name="IdentityDomainsIdentitySettingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsIdentitySettingTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get"></a>

```go
func Get(index *f64) IdentityDomainsIdentitySettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsIdentitySettingTagsOutputReference <a name="IdentityDomainsIdentitySettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsIdentitySettingTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsIdentitySettingTimeoutsOutputReference <a name="IdentityDomainsIdentitySettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsIdentitySettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsIdentitySettingTokensList <a name="IdentityDomainsIdentitySettingTokensList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingTokensList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsIdentitySettingTokensList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get"></a>

```go
func Get(index *f64) IdentityDomainsIdentitySettingTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsIdentitySettingTokensOutputReference <a name="IdentityDomainsIdentitySettingTokensOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitysetting"

identitydomainsidentitysetting.NewIdentityDomainsIdentitySettingTokensOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsIdentitySettingTokensOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resetExpiresAfter">ResetExpiresAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpiresAfter` <a name="ResetExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resetExpiresAfter"></a>

```go
func ResetExpiresAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfterInput">ExpiresAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfter">ExpiresAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpiresAfterInput`<sup>Optional</sup> <a name="ExpiresAfterInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfterInput"></a>

```go
func ExpiresAfterInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ExpiresAfter`<sup>Required</sup> <a name="ExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfter"></a>

```go
func ExpiresAfter() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



