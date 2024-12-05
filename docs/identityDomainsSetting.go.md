# `identityDomainsSetting` Submodule <a name="`identityDomainsSetting` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSetting <a name="IdentityDomainsSetting" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting oci_identity_domains_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSetting(scope Construct, id *string, config IdentityDomainsSettingConfig) IdentityDomainsSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig">IdentityDomainsSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig">IdentityDomainsSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation">PutCertificateValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings">PutCloudGateCorsSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCompanyNames">PutCompanyNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putImages">PutImages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putLoginTexts">PutLoginTexts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putPurgeConfigs">PutPurgeConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTenantCustomClaims">PutTenantCustomClaims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAccountAlwaysTrustScope">ResetAccountAlwaysTrustScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedDomains">ResetAllowedDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedForgotPasswordFlowReturnUrls">ResetAllowedForgotPasswordFlowReturnUrls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedNotificationRedirectUrls">ResetAllowedNotificationRedirectUrls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuditEventRetentionPeriod">ResetAuditEventRetentionPeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCertificateValidation">ResetCertificateValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudGateCorsSettings">ResetCloudGateCorsSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationCustomUrl">ResetCloudMigrationCustomUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationUrlEnabled">ResetCloudMigrationUrlEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCompanyNames">ResetCompanyNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetContactEmails">ResetContactEmails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomBranding">ResetCustomBranding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomCssLocation">ResetCustomCssLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomHtmlLocation">ResetCustomHtmlLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomTranslation">ResetCustomTranslation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDefaultTrustScope">ResetDefaultTrustScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticLevel">ResetDiagnosticLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticRecordForSearchIdentifiesReturnedResources">ResetDiagnosticRecordForSearchIdentifiesReturnedResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetEnableTermsOfUse">ResetEnableTermsOfUse</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIamUpstSessionExpiry">ResetIamUpstSessionExpiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetImages">ResetImages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIsHostedPage">ResetIsHostedPage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLocale">ResetLocale</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLoginTexts">ResetLoginTexts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppCmvaToReturn">ResetMaxNoOfAppCmvaToReturn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppRoleMembersToReturn">ResetMaxNoOfAppRoleMembersToReturn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPreferredLanguage">ResetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrevIssuer">ResetPrevIssuer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrivacyPolicyUrl">ResetPrivacyPolicyUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPurgeConfigs">ResetPurgeConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthFactor">ResetReAuthFactor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthWhenChangingMyAuthenticationFactors">ResetReAuthWhenChangingMyAuthenticationFactors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetServiceAdminCannotListOtherUsers">ResetServiceAdminCannotListOtherUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSigningCertPublicAccess">ResetSigningCertPublicAccess</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSubMappingAttr">ResetSubMappingAttr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTenantCustomClaims">ResetTenantCustomClaims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTermsOfUseUrl">ResetTermsOfUseUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificateValidation` <a name="PutCertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation"></a>

```go
func PutCertificateValidation(value IdentityDomainsSettingCertificateValidation)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

---

##### `PutCloudGateCorsSettings` <a name="PutCloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings"></a>

```go
func PutCloudGateCorsSettings(value IdentityDomainsSettingCloudGateCorsSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

---

##### `PutCompanyNames` <a name="PutCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCompanyNames"></a>

```go
func PutCompanyNames(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCompanyNames.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImages` <a name="PutImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putImages"></a>

```go
func PutImages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putImages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLoginTexts` <a name="PutLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putLoginTexts"></a>

```go
func PutLoginTexts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putLoginTexts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPurgeConfigs` <a name="PutPurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putPurgeConfigs"></a>

```go
func PutPurgeConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putPurgeConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTenantCustomClaims` <a name="PutTenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTenantCustomClaims"></a>

```go
func PutTenantCustomClaims(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTenantCustomClaims.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts"></a>

```go
func PutTimeouts(value IdentityDomainsSettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>

---

##### `ResetAccountAlwaysTrustScope` <a name="ResetAccountAlwaysTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAccountAlwaysTrustScope"></a>

```go
func ResetAccountAlwaysTrustScope()
```

##### `ResetAllowedDomains` <a name="ResetAllowedDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedDomains"></a>

```go
func ResetAllowedDomains()
```

##### `ResetAllowedForgotPasswordFlowReturnUrls` <a name="ResetAllowedForgotPasswordFlowReturnUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedForgotPasswordFlowReturnUrls"></a>

```go
func ResetAllowedForgotPasswordFlowReturnUrls()
```

##### `ResetAllowedNotificationRedirectUrls` <a name="ResetAllowedNotificationRedirectUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedNotificationRedirectUrls"></a>

```go
func ResetAllowedNotificationRedirectUrls()
```

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuditEventRetentionPeriod` <a name="ResetAuditEventRetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuditEventRetentionPeriod"></a>

```go
func ResetAuditEventRetentionPeriod()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCertificateValidation` <a name="ResetCertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCertificateValidation"></a>

```go
func ResetCertificateValidation()
```

##### `ResetCloudGateCorsSettings` <a name="ResetCloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudGateCorsSettings"></a>

```go
func ResetCloudGateCorsSettings()
```

##### `ResetCloudMigrationCustomUrl` <a name="ResetCloudMigrationCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationCustomUrl"></a>

```go
func ResetCloudMigrationCustomUrl()
```

##### `ResetCloudMigrationUrlEnabled` <a name="ResetCloudMigrationUrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationUrlEnabled"></a>

```go
func ResetCloudMigrationUrlEnabled()
```

##### `ResetCompanyNames` <a name="ResetCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCompanyNames"></a>

```go
func ResetCompanyNames()
```

##### `ResetContactEmails` <a name="ResetContactEmails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetContactEmails"></a>

```go
func ResetContactEmails()
```

##### `ResetCustomBranding` <a name="ResetCustomBranding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomBranding"></a>

```go
func ResetCustomBranding()
```

##### `ResetCustomCssLocation` <a name="ResetCustomCssLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomCssLocation"></a>

```go
func ResetCustomCssLocation()
```

##### `ResetCustomHtmlLocation` <a name="ResetCustomHtmlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomHtmlLocation"></a>

```go
func ResetCustomHtmlLocation()
```

##### `ResetCustomTranslation` <a name="ResetCustomTranslation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomTranslation"></a>

```go
func ResetCustomTranslation()
```

##### `ResetDefaultTrustScope` <a name="ResetDefaultTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDefaultTrustScope"></a>

```go
func ResetDefaultTrustScope()
```

##### `ResetDiagnosticLevel` <a name="ResetDiagnosticLevel" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticLevel"></a>

```go
func ResetDiagnosticLevel()
```

##### `ResetDiagnosticRecordForSearchIdentifiesReturnedResources` <a name="ResetDiagnosticRecordForSearchIdentifiesReturnedResources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticRecordForSearchIdentifiesReturnedResources"></a>

```go
func ResetDiagnosticRecordForSearchIdentifiesReturnedResources()
```

##### `ResetEnableTermsOfUse` <a name="ResetEnableTermsOfUse" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetEnableTermsOfUse"></a>

```go
func ResetEnableTermsOfUse()
```

##### `ResetExternalId` <a name="ResetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetIamUpstSessionExpiry` <a name="ResetIamUpstSessionExpiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIamUpstSessionExpiry"></a>

```go
func ResetIamUpstSessionExpiry()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetImages` <a name="ResetImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetImages"></a>

```go
func ResetImages()
```

##### `ResetIsHostedPage` <a name="ResetIsHostedPage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIsHostedPage"></a>

```go
func ResetIsHostedPage()
```

##### `ResetIssuer` <a name="ResetIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetLocale` <a name="ResetLocale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLocale"></a>

```go
func ResetLocale()
```

##### `ResetLoginTexts` <a name="ResetLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLoginTexts"></a>

```go
func ResetLoginTexts()
```

##### `ResetMaxNoOfAppCmvaToReturn` <a name="ResetMaxNoOfAppCmvaToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppCmvaToReturn"></a>

```go
func ResetMaxNoOfAppCmvaToReturn()
```

##### `ResetMaxNoOfAppRoleMembersToReturn` <a name="ResetMaxNoOfAppRoleMembersToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppRoleMembersToReturn"></a>

```go
func ResetMaxNoOfAppRoleMembersToReturn()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOcid"></a>

```go
func ResetOcid()
```

##### `ResetPreferredLanguage` <a name="ResetPreferredLanguage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPreferredLanguage"></a>

```go
func ResetPreferredLanguage()
```

##### `ResetPrevIssuer` <a name="ResetPrevIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrevIssuer"></a>

```go
func ResetPrevIssuer()
```

##### `ResetPrivacyPolicyUrl` <a name="ResetPrivacyPolicyUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrivacyPolicyUrl"></a>

```go
func ResetPrivacyPolicyUrl()
```

##### `ResetPurgeConfigs` <a name="ResetPurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPurgeConfigs"></a>

```go
func ResetPurgeConfigs()
```

##### `ResetReAuthFactor` <a name="ResetReAuthFactor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthFactor"></a>

```go
func ResetReAuthFactor()
```

##### `ResetReAuthWhenChangingMyAuthenticationFactors` <a name="ResetReAuthWhenChangingMyAuthenticationFactors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthWhenChangingMyAuthenticationFactors"></a>

```go
func ResetReAuthWhenChangingMyAuthenticationFactors()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetServiceAdminCannotListOtherUsers` <a name="ResetServiceAdminCannotListOtherUsers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetServiceAdminCannotListOtherUsers"></a>

```go
func ResetServiceAdminCannotListOtherUsers()
```

##### `ResetSigningCertPublicAccess` <a name="ResetSigningCertPublicAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSigningCertPublicAccess"></a>

```go
func ResetSigningCertPublicAccess()
```

##### `ResetSubMappingAttr` <a name="ResetSubMappingAttr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSubMappingAttr"></a>

```go
func ResetSubMappingAttr()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTenantCustomClaims` <a name="ResetTenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTenantCustomClaims"></a>

```go
func ResetTenantCustomClaims()
```

##### `ResetTermsOfUseUrl` <a name="ResetTermsOfUseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTermsOfUseUrl"></a>

```go
func ResetTermsOfUseUrl()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimezone` <a name="ResetTimezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimezone"></a>

```go
func ResetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.IdentityDomainsSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.IdentityDomainsSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.IdentityDomainsSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.IdentityDomainsSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityDomainsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityDomainsSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityDomainsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidation">CertificateValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference">IdentityDomainsSettingCertificateValidationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudAccountName">CloudAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettings">CloudGateCorsSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference">IdentityDomainsSettingCloudGateCorsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNames">CompanyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList">IdentityDomainsSettingCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultCompanyNames">DefaultCompanyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList">IdentityDomainsSettingDefaultCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultImages">DefaultImages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList">IdentityDomainsSettingDefaultImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultLoginTexts">DefaultLoginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList">IdentityDomainsSettingDefaultLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticTracingUpto">DiagnosticTracingUpto</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList">IdentityDomainsSettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList">IdentityDomainsSettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.images">Images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList">IdentityDomainsSettingImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTexts">LoginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList">IdentityDomainsSettingLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList">IdentityDomainsSettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.migrationStatus">MigrationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.onPremisesProvisioning">OnPremisesProvisioning</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigs">PurgeConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList">IdentityDomainsSettingPurgeConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList">IdentityDomainsSettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaims">TenantCustomClaims</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList">IdentityDomainsSettingTenantCustomClaimsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference">IdentityDomainsSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScopeInput">AccountAlwaysTrustScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomainsInput">AllowedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrlsInput">AllowedForgotPasswordFlowReturnUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrlsInput">AllowedNotificationRedirectUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriodInput">AuditEventRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidationInput">CertificateValidationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettingsInput">CloudGateCorsSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrlInput">CloudMigrationCustomUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabledInput">CloudMigrationUrlEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNamesInput">CompanyNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmailsInput">ContactEmailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccessInput">CsrAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBrandingInput">CustomBrandingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocationInput">CustomCssLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocationInput">CustomHtmlLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslationInput">CustomTranslationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScopeInput">DefaultTrustScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevelInput">DiagnosticLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResourcesInput">DiagnosticRecordForSearchIdentifiesReturnedResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUseInput">EnableTermsOfUseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiryInput">IamUpstSessionExpiryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.imagesInput">ImagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPageInput">IsHostedPageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.localeInput">LocaleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTextsInput">LoginTextsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturnInput">MaxNoOfAppCmvaToReturnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturnInput">MaxNoOfAppRoleMembersToReturnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocidInput">OcidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguageInput">PreferredLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuerInput">PrevIssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrlInput">PrivacyPolicyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigsInput">PurgeConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactorInput">ReAuthFactorInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactorsInput">ReAuthWhenChangingMyAuthenticationFactorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemasInput">SchemasInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsersInput">ServiceAdminCannotListOtherUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingIdInput">SettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccessInput">SigningCertPublicAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttrInput">SubMappingAttrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaimsInput">TenantCustomClaimsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrlInput">TermsOfUseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScope">AccountAlwaysTrustScope</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomains">AllowedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrls">AllowedForgotPasswordFlowReturnUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrls">AllowedNotificationRedirectUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriod">AuditEventRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrl">CloudMigrationCustomUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabled">CloudMigrationUrlEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmails">ContactEmails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccess">CsrAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBranding">CustomBranding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocation">CustomCssLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocation">CustomHtmlLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslation">CustomTranslation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScope">DefaultTrustScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevel">DiagnosticLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResources">DiagnosticRecordForSearchIdentifiesReturnedResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUse">EnableTermsOfUse</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiry">IamUpstSessionExpiry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPage">IsHostedPage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturn">MaxNoOfAppCmvaToReturn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturn">MaxNoOfAppRoleMembersToReturn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuer">PrevIssuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrl">PrivacyPolicyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactor">ReAuthFactor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactors">ReAuthWhenChangingMyAuthenticationFactors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsers">ServiceAdminCannotListOtherUsers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingId">SettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccess">SigningCertPublicAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttr">SubMappingAttr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrl">TermsOfUseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateValidation`<sup>Required</sup> <a name="CertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidation"></a>

```go
func CertificateValidation() IdentityDomainsSettingCertificateValidationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference">IdentityDomainsSettingCertificateValidationOutputReference</a>

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudAccountName"></a>

```go
func CloudAccountName() *string
```

- *Type:* *string

---

##### `CloudGateCorsSettings`<sup>Required</sup> <a name="CloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettings"></a>

```go
func CloudGateCorsSettings() IdentityDomainsSettingCloudGateCorsSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference">IdentityDomainsSettingCloudGateCorsSettingsOutputReference</a>

---

##### `CompanyNames`<sup>Required</sup> <a name="CompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNames"></a>

```go
func CompanyNames() IdentityDomainsSettingCompanyNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList">IdentityDomainsSettingCompanyNamesList</a>

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DefaultCompanyNames`<sup>Required</sup> <a name="DefaultCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultCompanyNames"></a>

```go
func DefaultCompanyNames() IdentityDomainsSettingDefaultCompanyNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList">IdentityDomainsSettingDefaultCompanyNamesList</a>

---

##### `DefaultImages`<sup>Required</sup> <a name="DefaultImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultImages"></a>

```go
func DefaultImages() IdentityDomainsSettingDefaultImagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList">IdentityDomainsSettingDefaultImagesList</a>

---

##### `DefaultLoginTexts`<sup>Required</sup> <a name="DefaultLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultLoginTexts"></a>

```go
func DefaultLoginTexts() IdentityDomainsSettingDefaultLoginTextsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList">IdentityDomainsSettingDefaultLoginTextsList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiagnosticTracingUpto`<sup>Required</sup> <a name="DiagnosticTracingUpto" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticTracingUpto"></a>

```go
func DiagnosticTracingUpto() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() IdentityDomainsSettingIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList">IdentityDomainsSettingIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() IdentityDomainsSettingIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList">IdentityDomainsSettingIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Images`<sup>Required</sup> <a name="Images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.images"></a>

```go
func Images() IdentityDomainsSettingImagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList">IdentityDomainsSettingImagesList</a>

---

##### `LoginTexts`<sup>Required</sup> <a name="LoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTexts"></a>

```go
func LoginTexts() IdentityDomainsSettingLoginTextsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList">IdentityDomainsSettingLoginTextsList</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.meta"></a>

```go
func Meta() IdentityDomainsSettingMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList">IdentityDomainsSettingMetaList</a>

---

##### `MigrationStatus`<sup>Required</sup> <a name="MigrationStatus" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.migrationStatus"></a>

```go
func MigrationStatus() *string
```

- *Type:* *string

---

##### `OnPremisesProvisioning`<sup>Required</sup> <a name="OnPremisesProvisioning" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.onPremisesProvisioning"></a>

```go
func OnPremisesProvisioning() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PurgeConfigs`<sup>Required</sup> <a name="PurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigs"></a>

```go
func PurgeConfigs() IdentityDomainsSettingPurgeConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList">IdentityDomainsSettingPurgeConfigsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tags"></a>

```go
func Tags() IdentityDomainsSettingTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList">IdentityDomainsSettingTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `TenantCustomClaims`<sup>Required</sup> <a name="TenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaims"></a>

```go
func TenantCustomClaims() IdentityDomainsSettingTenantCustomClaimsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList">IdentityDomainsSettingTenantCustomClaimsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeouts"></a>

```go
func Timeouts() IdentityDomainsSettingTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference">IdentityDomainsSettingTimeoutsOutputReference</a>

---

##### `AccountAlwaysTrustScopeInput`<sup>Optional</sup> <a name="AccountAlwaysTrustScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScopeInput"></a>

```go
func AccountAlwaysTrustScopeInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedDomainsInput`<sup>Optional</sup> <a name="AllowedDomainsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomainsInput"></a>

```go
func AllowedDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedForgotPasswordFlowReturnUrlsInput`<sup>Optional</sup> <a name="AllowedForgotPasswordFlowReturnUrlsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrlsInput"></a>

```go
func AllowedForgotPasswordFlowReturnUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedNotificationRedirectUrlsInput`<sup>Optional</sup> <a name="AllowedNotificationRedirectUrlsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrlsInput"></a>

```go
func AllowedNotificationRedirectUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuditEventRetentionPeriodInput`<sup>Optional</sup> <a name="AuditEventRetentionPeriodInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriodInput"></a>

```go
func AuditEventRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CertificateValidationInput`<sup>Optional</sup> <a name="CertificateValidationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidationInput"></a>

```go
func CertificateValidationInput() IdentityDomainsSettingCertificateValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

---

##### `CloudGateCorsSettingsInput`<sup>Optional</sup> <a name="CloudGateCorsSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettingsInput"></a>

```go
func CloudGateCorsSettingsInput() IdentityDomainsSettingCloudGateCorsSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

---

##### `CloudMigrationCustomUrlInput`<sup>Optional</sup> <a name="CloudMigrationCustomUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrlInput"></a>

```go
func CloudMigrationCustomUrlInput() *string
```

- *Type:* *string

---

##### `CloudMigrationUrlEnabledInput`<sup>Optional</sup> <a name="CloudMigrationUrlEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabledInput"></a>

```go
func CloudMigrationUrlEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CompanyNamesInput`<sup>Optional</sup> <a name="CompanyNamesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNamesInput"></a>

```go
func CompanyNamesInput() interface{}
```

- *Type:* interface{}

---

##### `ContactEmailsInput`<sup>Optional</sup> <a name="ContactEmailsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmailsInput"></a>

```go
func ContactEmailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CsrAccessInput`<sup>Optional</sup> <a name="CsrAccessInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccessInput"></a>

```go
func CsrAccessInput() *string
```

- *Type:* *string

---

##### `CustomBrandingInput`<sup>Optional</sup> <a name="CustomBrandingInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBrandingInput"></a>

```go
func CustomBrandingInput() interface{}
```

- *Type:* interface{}

---

##### `CustomCssLocationInput`<sup>Optional</sup> <a name="CustomCssLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocationInput"></a>

```go
func CustomCssLocationInput() *string
```

- *Type:* *string

---

##### `CustomHtmlLocationInput`<sup>Optional</sup> <a name="CustomHtmlLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocationInput"></a>

```go
func CustomHtmlLocationInput() *string
```

- *Type:* *string

---

##### `CustomTranslationInput`<sup>Optional</sup> <a name="CustomTranslationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslationInput"></a>

```go
func CustomTranslationInput() *string
```

- *Type:* *string

---

##### `DefaultTrustScopeInput`<sup>Optional</sup> <a name="DefaultTrustScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScopeInput"></a>

```go
func DefaultTrustScopeInput() *string
```

- *Type:* *string

---

##### `DiagnosticLevelInput`<sup>Optional</sup> <a name="DiagnosticLevelInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevelInput"></a>

```go
func DiagnosticLevelInput() *f64
```

- *Type:* *f64

---

##### `DiagnosticRecordForSearchIdentifiesReturnedResourcesInput`<sup>Optional</sup> <a name="DiagnosticRecordForSearchIdentifiesReturnedResourcesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResourcesInput"></a>

```go
func DiagnosticRecordForSearchIdentifiesReturnedResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `EnableTermsOfUseInput`<sup>Optional</sup> <a name="EnableTermsOfUseInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUseInput"></a>

```go
func EnableTermsOfUseInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `IamUpstSessionExpiryInput`<sup>Optional</sup> <a name="IamUpstSessionExpiryInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiryInput"></a>

```go
func IamUpstSessionExpiryInput() *f64
```

- *Type:* *f64

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImagesInput`<sup>Optional</sup> <a name="ImagesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.imagesInput"></a>

```go
func ImagesInput() interface{}
```

- *Type:* interface{}

---

##### `IsHostedPageInput`<sup>Optional</sup> <a name="IsHostedPageInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPageInput"></a>

```go
func IsHostedPageInput() interface{}
```

- *Type:* interface{}

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.localeInput"></a>

```go
func LocaleInput() *string
```

- *Type:* *string

---

##### `LoginTextsInput`<sup>Optional</sup> <a name="LoginTextsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTextsInput"></a>

```go
func LoginTextsInput() interface{}
```

- *Type:* interface{}

---

##### `MaxNoOfAppCmvaToReturnInput`<sup>Optional</sup> <a name="MaxNoOfAppCmvaToReturnInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturnInput"></a>

```go
func MaxNoOfAppCmvaToReturnInput() *f64
```

- *Type:* *f64

---

##### `MaxNoOfAppRoleMembersToReturnInput`<sup>Optional</sup> <a name="MaxNoOfAppRoleMembersToReturnInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturnInput"></a>

```go
func MaxNoOfAppRoleMembersToReturnInput() *f64
```

- *Type:* *f64

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocidInput"></a>

```go
func OcidInput() *string
```

- *Type:* *string

---

##### `PreferredLanguageInput`<sup>Optional</sup> <a name="PreferredLanguageInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguageInput"></a>

```go
func PreferredLanguageInput() *string
```

- *Type:* *string

---

##### `PrevIssuerInput`<sup>Optional</sup> <a name="PrevIssuerInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuerInput"></a>

```go
func PrevIssuerInput() *string
```

- *Type:* *string

---

##### `PrivacyPolicyUrlInput`<sup>Optional</sup> <a name="PrivacyPolicyUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrlInput"></a>

```go
func PrivacyPolicyUrlInput() *string
```

- *Type:* *string

---

##### `PurgeConfigsInput`<sup>Optional</sup> <a name="PurgeConfigsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigsInput"></a>

```go
func PurgeConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `ReAuthFactorInput`<sup>Optional</sup> <a name="ReAuthFactorInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactorInput"></a>

```go
func ReAuthFactorInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReAuthWhenChangingMyAuthenticationFactorsInput`<sup>Optional</sup> <a name="ReAuthWhenChangingMyAuthenticationFactorsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactorsInput"></a>

```go
func ReAuthWhenChangingMyAuthenticationFactorsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemasInput"></a>

```go
func SchemasInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAdminCannotListOtherUsersInput`<sup>Optional</sup> <a name="ServiceAdminCannotListOtherUsersInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsersInput"></a>

```go
func ServiceAdminCannotListOtherUsersInput() interface{}
```

- *Type:* interface{}

---

##### `SettingIdInput`<sup>Optional</sup> <a name="SettingIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingIdInput"></a>

```go
func SettingIdInput() *string
```

- *Type:* *string

---

##### `SigningCertPublicAccessInput`<sup>Optional</sup> <a name="SigningCertPublicAccessInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccessInput"></a>

```go
func SigningCertPublicAccessInput() interface{}
```

- *Type:* interface{}

---

##### `SubMappingAttrInput`<sup>Optional</sup> <a name="SubMappingAttrInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttrInput"></a>

```go
func SubMappingAttrInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TenantCustomClaimsInput`<sup>Optional</sup> <a name="TenantCustomClaimsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaimsInput"></a>

```go
func TenantCustomClaimsInput() interface{}
```

- *Type:* interface{}

---

##### `TermsOfUseUrlInput`<sup>Optional</sup> <a name="TermsOfUseUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrlInput"></a>

```go
func TermsOfUseUrlInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `AccountAlwaysTrustScope`<sup>Required</sup> <a name="AccountAlwaysTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScope"></a>

```go
func AccountAlwaysTrustScope() interface{}
```

- *Type:* interface{}

---

##### `AllowedDomains`<sup>Required</sup> <a name="AllowedDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomains"></a>

```go
func AllowedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedForgotPasswordFlowReturnUrls`<sup>Required</sup> <a name="AllowedForgotPasswordFlowReturnUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrls"></a>

```go
func AllowedForgotPasswordFlowReturnUrls() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedNotificationRedirectUrls`<sup>Required</sup> <a name="AllowedNotificationRedirectUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrls"></a>

```go
func AllowedNotificationRedirectUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `AuditEventRetentionPeriod`<sup>Required</sup> <a name="AuditEventRetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriod"></a>

```go
func AuditEventRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CloudMigrationCustomUrl`<sup>Required</sup> <a name="CloudMigrationCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrl"></a>

```go
func CloudMigrationCustomUrl() *string
```

- *Type:* *string

---

##### `CloudMigrationUrlEnabled`<sup>Required</sup> <a name="CloudMigrationUrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabled"></a>

```go
func CloudMigrationUrlEnabled() interface{}
```

- *Type:* interface{}

---

##### `ContactEmails`<sup>Required</sup> <a name="ContactEmails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmails"></a>

```go
func ContactEmails() *[]*string
```

- *Type:* *[]*string

---

##### `CsrAccess`<sup>Required</sup> <a name="CsrAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccess"></a>

```go
func CsrAccess() *string
```

- *Type:* *string

---

##### `CustomBranding`<sup>Required</sup> <a name="CustomBranding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBranding"></a>

```go
func CustomBranding() interface{}
```

- *Type:* interface{}

---

##### `CustomCssLocation`<sup>Required</sup> <a name="CustomCssLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocation"></a>

```go
func CustomCssLocation() *string
```

- *Type:* *string

---

##### `CustomHtmlLocation`<sup>Required</sup> <a name="CustomHtmlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocation"></a>

```go
func CustomHtmlLocation() *string
```

- *Type:* *string

---

##### `CustomTranslation`<sup>Required</sup> <a name="CustomTranslation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslation"></a>

```go
func CustomTranslation() *string
```

- *Type:* *string

---

##### `DefaultTrustScope`<sup>Required</sup> <a name="DefaultTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScope"></a>

```go
func DefaultTrustScope() *string
```

- *Type:* *string

---

##### `DiagnosticLevel`<sup>Required</sup> <a name="DiagnosticLevel" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevel"></a>

```go
func DiagnosticLevel() *f64
```

- *Type:* *f64

---

##### `DiagnosticRecordForSearchIdentifiesReturnedResources`<sup>Required</sup> <a name="DiagnosticRecordForSearchIdentifiesReturnedResources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResources"></a>

```go
func DiagnosticRecordForSearchIdentifiesReturnedResources() interface{}
```

- *Type:* interface{}

---

##### `EnableTermsOfUse`<sup>Required</sup> <a name="EnableTermsOfUse" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUse"></a>

```go
func EnableTermsOfUse() interface{}
```

- *Type:* interface{}

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `IamUpstSessionExpiry`<sup>Required</sup> <a name="IamUpstSessionExpiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiry"></a>

```go
func IamUpstSessionExpiry() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IsHostedPage`<sup>Required</sup> <a name="IsHostedPage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPage"></a>

```go
func IsHostedPage() interface{}
```

- *Type:* interface{}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `MaxNoOfAppCmvaToReturn`<sup>Required</sup> <a name="MaxNoOfAppCmvaToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturn"></a>

```go
func MaxNoOfAppCmvaToReturn() *f64
```

- *Type:* *f64

---

##### `MaxNoOfAppRoleMembersToReturn`<sup>Required</sup> <a name="MaxNoOfAppRoleMembersToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturn"></a>

```go
func MaxNoOfAppRoleMembersToReturn() *f64
```

- *Type:* *f64

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `PrevIssuer`<sup>Required</sup> <a name="PrevIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuer"></a>

```go
func PrevIssuer() *string
```

- *Type:* *string

---

##### `PrivacyPolicyUrl`<sup>Required</sup> <a name="PrivacyPolicyUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrl"></a>

```go
func PrivacyPolicyUrl() *string
```

- *Type:* *string

---

##### `ReAuthFactor`<sup>Required</sup> <a name="ReAuthFactor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactor"></a>

```go
func ReAuthFactor() *[]*string
```

- *Type:* *[]*string

---

##### `ReAuthWhenChangingMyAuthenticationFactors`<sup>Required</sup> <a name="ReAuthWhenChangingMyAuthenticationFactors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactors"></a>

```go
func ReAuthWhenChangingMyAuthenticationFactors() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAdminCannotListOtherUsers`<sup>Required</sup> <a name="ServiceAdminCannotListOtherUsers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsers"></a>

```go
func ServiceAdminCannotListOtherUsers() interface{}
```

- *Type:* interface{}

---

##### `SettingId`<sup>Required</sup> <a name="SettingId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingId"></a>

```go
func SettingId() *string
```

- *Type:* *string

---

##### `SigningCertPublicAccess`<sup>Required</sup> <a name="SigningCertPublicAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccess"></a>

```go
func SigningCertPublicAccess() interface{}
```

- *Type:* interface{}

---

##### `SubMappingAttr`<sup>Required</sup> <a name="SubMappingAttr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttr"></a>

```go
func SubMappingAttr() *string
```

- *Type:* *string

---

##### `TermsOfUseUrl`<sup>Required</sup> <a name="TermsOfUseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrl"></a>

```go
func TermsOfUseUrl() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSettingCertificateValidation <a name="IdentityDomainsSettingCertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingCertificateValidation {
	CrlCheckOnOcspFailureEnabled: interface{},
	CrlEnabled: interface{},
	CrlLocation: *string,
	CrlRefreshInterval: *f64,
	OcspEnabled: interface{},
	OcspResponderUrl: *string,
	OcspSettingsResponderUrlPreferred: interface{},
	OcspSigningCertificateAlias: *string,
	OcspTimeoutDuration: *f64,
	OcspUnknownResponseStatusAllowed: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlCheckOnOcspFailureEnabled">CrlCheckOnOcspFailureEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_check_on_ocsp_failure_enabled IdentityDomainsSetting#crl_check_on_ocsp_failure_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlEnabled">CrlEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_enabled IdentityDomainsSetting#crl_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlLocation">CrlLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_location IdentityDomainsSetting#crl_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlRefreshInterval">CrlRefreshInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_refresh_interval IdentityDomainsSetting#crl_refresh_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspEnabled">OcspEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_enabled IdentityDomainsSetting#ocsp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspResponderUrl">OcspResponderUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_responder_url IdentityDomainsSetting#ocsp_responder_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSettingsResponderUrlPreferred">OcspSettingsResponderUrlPreferred</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_settings_responder_url_preferred IdentityDomainsSetting#ocsp_settings_responder_url_preferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSigningCertificateAlias">OcspSigningCertificateAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_signing_certificate_alias IdentityDomainsSetting#ocsp_signing_certificate_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspTimeoutDuration">OcspTimeoutDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_timeout_duration IdentityDomainsSetting#ocsp_timeout_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspUnknownResponseStatusAllowed">OcspUnknownResponseStatusAllowed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_unknown_response_status_allowed IdentityDomainsSetting#ocsp_unknown_response_status_allowed}. |

---

##### `CrlCheckOnOcspFailureEnabled`<sup>Optional</sup> <a name="CrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlCheckOnOcspFailureEnabled"></a>

```go
CrlCheckOnOcspFailureEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_check_on_ocsp_failure_enabled IdentityDomainsSetting#crl_check_on_ocsp_failure_enabled}.

---

##### `CrlEnabled`<sup>Optional</sup> <a name="CrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlEnabled"></a>

```go
CrlEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_enabled IdentityDomainsSetting#crl_enabled}.

---

##### `CrlLocation`<sup>Optional</sup> <a name="CrlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlLocation"></a>

```go
CrlLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_location IdentityDomainsSetting#crl_location}.

---

##### `CrlRefreshInterval`<sup>Optional</sup> <a name="CrlRefreshInterval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlRefreshInterval"></a>

```go
CrlRefreshInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_refresh_interval IdentityDomainsSetting#crl_refresh_interval}.

---

##### `OcspEnabled`<sup>Optional</sup> <a name="OcspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspEnabled"></a>

```go
OcspEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_enabled IdentityDomainsSetting#ocsp_enabled}.

---

##### `OcspResponderUrl`<sup>Optional</sup> <a name="OcspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspResponderUrl"></a>

```go
OcspResponderUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_responder_url IdentityDomainsSetting#ocsp_responder_url}.

---

##### `OcspSettingsResponderUrlPreferred`<sup>Optional</sup> <a name="OcspSettingsResponderUrlPreferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSettingsResponderUrlPreferred"></a>

```go
OcspSettingsResponderUrlPreferred interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_settings_responder_url_preferred IdentityDomainsSetting#ocsp_settings_responder_url_preferred}.

---

##### `OcspSigningCertificateAlias`<sup>Optional</sup> <a name="OcspSigningCertificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSigningCertificateAlias"></a>

```go
OcspSigningCertificateAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_signing_certificate_alias IdentityDomainsSetting#ocsp_signing_certificate_alias}.

---

##### `OcspTimeoutDuration`<sup>Optional</sup> <a name="OcspTimeoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspTimeoutDuration"></a>

```go
OcspTimeoutDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_timeout_duration IdentityDomainsSetting#ocsp_timeout_duration}.

---

##### `OcspUnknownResponseStatusAllowed`<sup>Optional</sup> <a name="OcspUnknownResponseStatusAllowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspUnknownResponseStatusAllowed"></a>

```go
OcspUnknownResponseStatusAllowed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_unknown_response_status_allowed IdentityDomainsSetting#ocsp_unknown_response_status_allowed}.

---

### IdentityDomainsSettingCloudGateCorsSettings <a name="IdentityDomainsSettingCloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingCloudGateCorsSettings {
	CloudGateCorsAllowedOrigins: *[]*string,
	CloudGateCorsAllowNullOrigin: interface{},
	CloudGateCorsEnabled: interface{},
	CloudGateCorsExposedHeaders: *[]*string,
	CloudGateCorsMaxAge: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowedOrigins">CloudGateCorsAllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allowed_origins IdentityDomainsSetting#cloud_gate_cors_allowed_origins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowNullOrigin">CloudGateCorsAllowNullOrigin</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allow_null_origin IdentityDomainsSetting#cloud_gate_cors_allow_null_origin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsEnabled">CloudGateCorsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_enabled IdentityDomainsSetting#cloud_gate_cors_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsExposedHeaders">CloudGateCorsExposedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_exposed_headers IdentityDomainsSetting#cloud_gate_cors_exposed_headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsMaxAge">CloudGateCorsMaxAge</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_max_age IdentityDomainsSetting#cloud_gate_cors_max_age}. |

---

##### `CloudGateCorsAllowedOrigins`<sup>Optional</sup> <a name="CloudGateCorsAllowedOrigins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowedOrigins"></a>

```go
CloudGateCorsAllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allowed_origins IdentityDomainsSetting#cloud_gate_cors_allowed_origins}.

---

##### `CloudGateCorsAllowNullOrigin`<sup>Optional</sup> <a name="CloudGateCorsAllowNullOrigin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowNullOrigin"></a>

```go
CloudGateCorsAllowNullOrigin interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allow_null_origin IdentityDomainsSetting#cloud_gate_cors_allow_null_origin}.

---

##### `CloudGateCorsEnabled`<sup>Optional</sup> <a name="CloudGateCorsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsEnabled"></a>

```go
CloudGateCorsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_enabled IdentityDomainsSetting#cloud_gate_cors_enabled}.

---

##### `CloudGateCorsExposedHeaders`<sup>Optional</sup> <a name="CloudGateCorsExposedHeaders" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsExposedHeaders"></a>

```go
CloudGateCorsExposedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_exposed_headers IdentityDomainsSetting#cloud_gate_cors_exposed_headers}.

---

##### `CloudGateCorsMaxAge`<sup>Optional</sup> <a name="CloudGateCorsMaxAge" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsMaxAge"></a>

```go
CloudGateCorsMaxAge *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_max_age IdentityDomainsSetting#cloud_gate_cors_max_age}.

---

### IdentityDomainsSettingCompanyNames <a name="IdentityDomainsSettingCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingCompanyNames {
	Locale: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.locale">Locale</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.locale"></a>

```go
Locale *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingConfig <a name="IdentityDomainsSettingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CsrAccess: *string,
	IdcsEndpoint: *string,
	Schemas: *[]*string,
	SettingId: *string,
	AccountAlwaysTrustScope: interface{},
	AllowedDomains: *[]*string,
	AllowedForgotPasswordFlowReturnUrls: *[]*string,
	AllowedNotificationRedirectUrls: *[]*string,
	Attributes: *string,
	AttributeSets: *[]*string,
	AuditEventRetentionPeriod: *f64,
	Authorization: *string,
	CertificateValidation: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation,
	CloudGateCorsSettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings,
	CloudMigrationCustomUrl: *string,
	CloudMigrationUrlEnabled: interface{},
	CompanyNames: interface{},
	ContactEmails: *[]*string,
	CustomBranding: interface{},
	CustomCssLocation: *string,
	CustomHtmlLocation: *string,
	CustomTranslation: *string,
	DefaultTrustScope: *string,
	DiagnosticLevel: *f64,
	DiagnosticRecordForSearchIdentifiesReturnedResources: interface{},
	EnableTermsOfUse: interface{},
	ExternalId: *string,
	IamUpstSessionExpiry: *f64,
	Id: *string,
	Images: interface{},
	IsHostedPage: interface{},
	Issuer: *string,
	Locale: *string,
	LoginTexts: interface{},
	MaxNoOfAppCmvaToReturn: *f64,
	MaxNoOfAppRoleMembersToReturn: *f64,
	Ocid: *string,
	PreferredLanguage: *string,
	PrevIssuer: *string,
	PrivacyPolicyUrl: *string,
	PurgeConfigs: interface{},
	ReAuthFactor: *[]*string,
	ReAuthWhenChangingMyAuthenticationFactors: interface{},
	ResourceTypeSchemaVersion: *string,
	ServiceAdminCannotListOtherUsers: interface{},
	SigningCertPublicAccess: interface{},
	SubMappingAttr: *string,
	Tags: interface{},
	TenantCustomClaims: interface{},
	TermsOfUseUrl: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsSetting.IdentityDomainsSettingTimeouts,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.csrAccess">CsrAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#csr_access IdentityDomainsSetting#csr_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#idcs_endpoint IdentityDomainsSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.schemas">Schemas</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#schemas IdentityDomainsSetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.settingId">SettingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#setting_id IdentityDomainsSetting#setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.accountAlwaysTrustScope">AccountAlwaysTrustScope</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#account_always_trust_scope IdentityDomainsSetting#account_always_trust_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedDomains">AllowedDomains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_domains IdentityDomainsSetting#allowed_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedForgotPasswordFlowReturnUrls">AllowedForgotPasswordFlowReturnUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_forgot_password_flow_return_urls IdentityDomainsSetting#allowed_forgot_password_flow_return_urls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedNotificationRedirectUrls">AllowedNotificationRedirectUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_notification_redirect_urls IdentityDomainsSetting#allowed_notification_redirect_urls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attributes IdentityDomainsSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attribute_sets IdentityDomainsSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.auditEventRetentionPeriod">AuditEventRetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#audit_event_retention_period IdentityDomainsSetting#audit_event_retention_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#authorization IdentityDomainsSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.certificateValidation">CertificateValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | certificate_validation block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudGateCorsSettings">CloudGateCorsSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | cloud_gate_cors_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationCustomUrl">CloudMigrationCustomUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_custom_url IdentityDomainsSetting#cloud_migration_custom_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationUrlEnabled">CloudMigrationUrlEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_url_enabled IdentityDomainsSetting#cloud_migration_url_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.companyNames">CompanyNames</a></code> | <code>interface{}</code> | company_names block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.contactEmails">ContactEmails</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#contact_emails IdentityDomainsSetting#contact_emails}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customBranding">CustomBranding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_branding IdentityDomainsSetting#custom_branding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customCssLocation">CustomCssLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_css_location IdentityDomainsSetting#custom_css_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customHtmlLocation">CustomHtmlLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_html_location IdentityDomainsSetting#custom_html_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customTranslation">CustomTranslation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_translation IdentityDomainsSetting#custom_translation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.defaultTrustScope">DefaultTrustScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#default_trust_scope IdentityDomainsSetting#default_trust_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticLevel">DiagnosticLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_level IdentityDomainsSetting#diagnostic_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticRecordForSearchIdentifiesReturnedResources">DiagnosticRecordForSearchIdentifiesReturnedResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_record_for_search_identifies_returned_resources IdentityDomainsSetting#diagnostic_record_for_search_identifies_returned_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.enableTermsOfUse">EnableTermsOfUse</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#enable_terms_of_use IdentityDomainsSetting#enable_terms_of_use}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#external_id IdentityDomainsSetting#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.iamUpstSessionExpiry">IamUpstSessionExpiry</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#iam_upst_session_expiry IdentityDomainsSetting#iam_upst_session_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#id IdentityDomainsSetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.images">Images</a></code> | <code>interface{}</code> | images block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.isHostedPage">IsHostedPage</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#is_hosted_page IdentityDomainsSetting#is_hosted_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#issuer IdentityDomainsSetting#issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.locale">Locale</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.loginTexts">LoginTexts</a></code> | <code>interface{}</code> | login_texts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppCmvaToReturn">MaxNoOfAppCmvaToReturn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_cmva_to_return IdentityDomainsSetting#max_no_of_app_cmva_to_return}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppRoleMembersToReturn">MaxNoOfAppRoleMembersToReturn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_role_members_to_return IdentityDomainsSetting#max_no_of_app_role_members_to_return}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.ocid">Ocid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocid IdentityDomainsSetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#preferred_language IdentityDomainsSetting#preferred_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.prevIssuer">PrevIssuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#prev_issuer IdentityDomainsSetting#prev_issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.privacyPolicyUrl">PrivacyPolicyUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#privacy_policy_url IdentityDomainsSetting#privacy_policy_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.purgeConfigs">PurgeConfigs</a></code> | <code>interface{}</code> | purge_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthFactor">ReAuthFactor</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_factor IdentityDomainsSetting#re_auth_factor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthWhenChangingMyAuthenticationFactors">ReAuthWhenChangingMyAuthenticationFactors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_when_changing_my_authentication_factors IdentityDomainsSetting#re_auth_when_changing_my_authentication_factors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_type_schema_version IdentityDomainsSetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.serviceAdminCannotListOtherUsers">ServiceAdminCannotListOtherUsers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#service_admin_cannot_list_other_users IdentityDomainsSetting#service_admin_cannot_list_other_users}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.signingCertPublicAccess">SigningCertPublicAccess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#signing_cert_public_access IdentityDomainsSetting#signing_cert_public_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.subMappingAttr">SubMappingAttr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#sub_mapping_attr IdentityDomainsSetting#sub_mapping_attr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tenantCustomClaims">TenantCustomClaims</a></code> | <code>interface{}</code> | tenant_custom_claims block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.termsOfUseUrl">TermsOfUseUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#terms_of_use_url IdentityDomainsSetting#terms_of_use_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timezone IdentityDomainsSetting#timezone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CsrAccess`<sup>Required</sup> <a name="CsrAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.csrAccess"></a>

```go
CsrAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#csr_access IdentityDomainsSetting#csr_access}.

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#idcs_endpoint IdentityDomainsSetting#idcs_endpoint}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.schemas"></a>

```go
Schemas *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#schemas IdentityDomainsSetting#schemas}.

---

##### `SettingId`<sup>Required</sup> <a name="SettingId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.settingId"></a>

```go
SettingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#setting_id IdentityDomainsSetting#setting_id}.

---

##### `AccountAlwaysTrustScope`<sup>Optional</sup> <a name="AccountAlwaysTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.accountAlwaysTrustScope"></a>

```go
AccountAlwaysTrustScope interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#account_always_trust_scope IdentityDomainsSetting#account_always_trust_scope}.

---

##### `AllowedDomains`<sup>Optional</sup> <a name="AllowedDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedDomains"></a>

```go
AllowedDomains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_domains IdentityDomainsSetting#allowed_domains}.

---

##### `AllowedForgotPasswordFlowReturnUrls`<sup>Optional</sup> <a name="AllowedForgotPasswordFlowReturnUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedForgotPasswordFlowReturnUrls"></a>

```go
AllowedForgotPasswordFlowReturnUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_forgot_password_flow_return_urls IdentityDomainsSetting#allowed_forgot_password_flow_return_urls}.

---

##### `AllowedNotificationRedirectUrls`<sup>Optional</sup> <a name="AllowedNotificationRedirectUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedNotificationRedirectUrls"></a>

```go
AllowedNotificationRedirectUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_notification_redirect_urls IdentityDomainsSetting#allowed_notification_redirect_urls}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attributes IdentityDomainsSetting#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attribute_sets IdentityDomainsSetting#attribute_sets}.

---

##### `AuditEventRetentionPeriod`<sup>Optional</sup> <a name="AuditEventRetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.auditEventRetentionPeriod"></a>

```go
AuditEventRetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#audit_event_retention_period IdentityDomainsSetting#audit_event_retention_period}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#authorization IdentityDomainsSetting#authorization}.

---

##### `CertificateValidation`<sup>Optional</sup> <a name="CertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.certificateValidation"></a>

```go
CertificateValidation IdentityDomainsSettingCertificateValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

certificate_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#certificate_validation IdentityDomainsSetting#certificate_validation}

---

##### `CloudGateCorsSettings`<sup>Optional</sup> <a name="CloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudGateCorsSettings"></a>

```go
CloudGateCorsSettings IdentityDomainsSettingCloudGateCorsSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

cloud_gate_cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_settings IdentityDomainsSetting#cloud_gate_cors_settings}

---

##### `CloudMigrationCustomUrl`<sup>Optional</sup> <a name="CloudMigrationCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationCustomUrl"></a>

```go
CloudMigrationCustomUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_custom_url IdentityDomainsSetting#cloud_migration_custom_url}.

---

##### `CloudMigrationUrlEnabled`<sup>Optional</sup> <a name="CloudMigrationUrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationUrlEnabled"></a>

```go
CloudMigrationUrlEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_url_enabled IdentityDomainsSetting#cloud_migration_url_enabled}.

---

##### `CompanyNames`<sup>Optional</sup> <a name="CompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.companyNames"></a>

```go
CompanyNames interface{}
```

- *Type:* interface{}

company_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#company_names IdentityDomainsSetting#company_names}

---

##### `ContactEmails`<sup>Optional</sup> <a name="ContactEmails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.contactEmails"></a>

```go
ContactEmails *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#contact_emails IdentityDomainsSetting#contact_emails}.

---

##### `CustomBranding`<sup>Optional</sup> <a name="CustomBranding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customBranding"></a>

```go
CustomBranding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_branding IdentityDomainsSetting#custom_branding}.

---

##### `CustomCssLocation`<sup>Optional</sup> <a name="CustomCssLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customCssLocation"></a>

```go
CustomCssLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_css_location IdentityDomainsSetting#custom_css_location}.

---

##### `CustomHtmlLocation`<sup>Optional</sup> <a name="CustomHtmlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customHtmlLocation"></a>

```go
CustomHtmlLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_html_location IdentityDomainsSetting#custom_html_location}.

---

##### `CustomTranslation`<sup>Optional</sup> <a name="CustomTranslation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customTranslation"></a>

```go
CustomTranslation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_translation IdentityDomainsSetting#custom_translation}.

---

##### `DefaultTrustScope`<sup>Optional</sup> <a name="DefaultTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.defaultTrustScope"></a>

```go
DefaultTrustScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#default_trust_scope IdentityDomainsSetting#default_trust_scope}.

---

##### `DiagnosticLevel`<sup>Optional</sup> <a name="DiagnosticLevel" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticLevel"></a>

```go
DiagnosticLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_level IdentityDomainsSetting#diagnostic_level}.

---

##### `DiagnosticRecordForSearchIdentifiesReturnedResources`<sup>Optional</sup> <a name="DiagnosticRecordForSearchIdentifiesReturnedResources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticRecordForSearchIdentifiesReturnedResources"></a>

```go
DiagnosticRecordForSearchIdentifiesReturnedResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_record_for_search_identifies_returned_resources IdentityDomainsSetting#diagnostic_record_for_search_identifies_returned_resources}.

---

##### `EnableTermsOfUse`<sup>Optional</sup> <a name="EnableTermsOfUse" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.enableTermsOfUse"></a>

```go
EnableTermsOfUse interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#enable_terms_of_use IdentityDomainsSetting#enable_terms_of_use}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#external_id IdentityDomainsSetting#external_id}.

---

##### `IamUpstSessionExpiry`<sup>Optional</sup> <a name="IamUpstSessionExpiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.iamUpstSessionExpiry"></a>

```go
IamUpstSessionExpiry *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#iam_upst_session_expiry IdentityDomainsSetting#iam_upst_session_expiry}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#id IdentityDomainsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Images`<sup>Optional</sup> <a name="Images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.images"></a>

```go
Images interface{}
```

- *Type:* interface{}

images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#images IdentityDomainsSetting#images}

---

##### `IsHostedPage`<sup>Optional</sup> <a name="IsHostedPage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.isHostedPage"></a>

```go
IsHostedPage interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#is_hosted_page IdentityDomainsSetting#is_hosted_page}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#issuer IdentityDomainsSetting#issuer}.

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.locale"></a>

```go
Locale *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `LoginTexts`<sup>Optional</sup> <a name="LoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.loginTexts"></a>

```go
LoginTexts interface{}
```

- *Type:* interface{}

login_texts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#login_texts IdentityDomainsSetting#login_texts}

---

##### `MaxNoOfAppCmvaToReturn`<sup>Optional</sup> <a name="MaxNoOfAppCmvaToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppCmvaToReturn"></a>

```go
MaxNoOfAppCmvaToReturn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_cmva_to_return IdentityDomainsSetting#max_no_of_app_cmva_to_return}.

---

##### `MaxNoOfAppRoleMembersToReturn`<sup>Optional</sup> <a name="MaxNoOfAppRoleMembersToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppRoleMembersToReturn"></a>

```go
MaxNoOfAppRoleMembersToReturn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_role_members_to_return IdentityDomainsSetting#max_no_of_app_role_members_to_return}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.ocid"></a>

```go
Ocid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocid IdentityDomainsSetting#ocid}.

---

##### `PreferredLanguage`<sup>Optional</sup> <a name="PreferredLanguage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.preferredLanguage"></a>

```go
PreferredLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#preferred_language IdentityDomainsSetting#preferred_language}.

---

##### `PrevIssuer`<sup>Optional</sup> <a name="PrevIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.prevIssuer"></a>

```go
PrevIssuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#prev_issuer IdentityDomainsSetting#prev_issuer}.

---

##### `PrivacyPolicyUrl`<sup>Optional</sup> <a name="PrivacyPolicyUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.privacyPolicyUrl"></a>

```go
PrivacyPolicyUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#privacy_policy_url IdentityDomainsSetting#privacy_policy_url}.

---

##### `PurgeConfigs`<sup>Optional</sup> <a name="PurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.purgeConfigs"></a>

```go
PurgeConfigs interface{}
```

- *Type:* interface{}

purge_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#purge_configs IdentityDomainsSetting#purge_configs}

---

##### `ReAuthFactor`<sup>Optional</sup> <a name="ReAuthFactor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthFactor"></a>

```go
ReAuthFactor *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_factor IdentityDomainsSetting#re_auth_factor}.

---

##### `ReAuthWhenChangingMyAuthenticationFactors`<sup>Optional</sup> <a name="ReAuthWhenChangingMyAuthenticationFactors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthWhenChangingMyAuthenticationFactors"></a>

```go
ReAuthWhenChangingMyAuthenticationFactors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_when_changing_my_authentication_factors IdentityDomainsSetting#re_auth_when_changing_my_authentication_factors}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_type_schema_version IdentityDomainsSetting#resource_type_schema_version}.

---

##### `ServiceAdminCannotListOtherUsers`<sup>Optional</sup> <a name="ServiceAdminCannotListOtherUsers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.serviceAdminCannotListOtherUsers"></a>

```go
ServiceAdminCannotListOtherUsers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#service_admin_cannot_list_other_users IdentityDomainsSetting#service_admin_cannot_list_other_users}.

---

##### `SigningCertPublicAccess`<sup>Optional</sup> <a name="SigningCertPublicAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.signingCertPublicAccess"></a>

```go
SigningCertPublicAccess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#signing_cert_public_access IdentityDomainsSetting#signing_cert_public_access}.

---

##### `SubMappingAttr`<sup>Optional</sup> <a name="SubMappingAttr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.subMappingAttr"></a>

```go
SubMappingAttr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#sub_mapping_attr IdentityDomainsSetting#sub_mapping_attr}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#tags IdentityDomainsSetting#tags}

---

##### `TenantCustomClaims`<sup>Optional</sup> <a name="TenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tenantCustomClaims"></a>

```go
TenantCustomClaims interface{}
```

- *Type:* interface{}

tenant_custom_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#tenant_custom_claims IdentityDomainsSetting#tenant_custom_claims}

---

##### `TermsOfUseUrl`<sup>Optional</sup> <a name="TermsOfUseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.termsOfUseUrl"></a>

```go
TermsOfUseUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#terms_of_use_url IdentityDomainsSetting#terms_of_use_url}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timeouts"></a>

```go
Timeouts IdentityDomainsSettingTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timeouts IdentityDomainsSetting#timeouts}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timezone IdentityDomainsSetting#timezone}.

---

### IdentityDomainsSettingDefaultCompanyNames <a name="IdentityDomainsSettingDefaultCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingDefaultCompanyNames {

}
```


### IdentityDomainsSettingDefaultImages <a name="IdentityDomainsSettingDefaultImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingDefaultImages {

}
```


### IdentityDomainsSettingDefaultLoginTexts <a name="IdentityDomainsSettingDefaultLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingDefaultLoginTexts {

}
```


### IdentityDomainsSettingIdcsCreatedBy <a name="IdentityDomainsSettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingIdcsCreatedBy {

}
```


### IdentityDomainsSettingIdcsLastModifiedBy <a name="IdentityDomainsSettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingIdcsLastModifiedBy {

}
```


### IdentityDomainsSettingImages <a name="IdentityDomainsSettingImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingImages {
	Type: *string,
	Value: *string,
	Display: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#type IdentityDomainsSetting#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.display">Display</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#display IdentityDomainsSetting#display}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#type IdentityDomainsSetting#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.display"></a>

```go
Display *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#display IdentityDomainsSetting#display}.

---

### IdentityDomainsSettingLoginTexts <a name="IdentityDomainsSettingLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingLoginTexts {
	Locale: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.locale">Locale</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.locale"></a>

```go
Locale *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingMeta <a name="IdentityDomainsSettingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingMeta {

}
```


### IdentityDomainsSettingPurgeConfigs <a name="IdentityDomainsSettingPurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingPurgeConfigs {
	ResourceName: *string,
	RetentionPeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.resourceName">ResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_name IdentityDomainsSetting#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#retention_period IdentityDomainsSetting#retention_period}. |

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_name IdentityDomainsSetting#resource_name}.

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.retentionPeriod"></a>

```go
RetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#retention_period IdentityDomainsSetting#retention_period}.

---

### IdentityDomainsSettingTags <a name="IdentityDomainsSettingTags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#key IdentityDomainsSetting#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#key IdentityDomainsSetting#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingTenantCustomClaims <a name="IdentityDomainsSettingTenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingTenantCustomClaims {
	AllScopes: interface{},
	Expression: interface{},
	Mode: *string,
	Name: *string,
	TokenType: *string,
	Value: *string,
	Scopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.allScopes">AllScopes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#all_scopes IdentityDomainsSetting#all_scopes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.expression">Expression</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#expression IdentityDomainsSetting#expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#mode IdentityDomainsSetting#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#name IdentityDomainsSetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.tokenType">TokenType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#token_type IdentityDomainsSetting#token_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#scopes IdentityDomainsSetting#scopes}. |

---

##### `AllScopes`<sup>Required</sup> <a name="AllScopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.allScopes"></a>

```go
AllScopes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#all_scopes IdentityDomainsSetting#all_scopes}.

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.expression"></a>

```go
Expression interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#expression IdentityDomainsSetting#expression}.

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#mode IdentityDomainsSetting#mode}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#name IdentityDomainsSetting#name}.

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#token_type IdentityDomainsSetting#token_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#scopes IdentityDomainsSetting#scopes}.

---

### IdentityDomainsSettingTimeouts <a name="IdentityDomainsSettingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

&identitydomainssetting.IdentityDomainsSettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#create IdentityDomainsSetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#delete IdentityDomainsSetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#update IdentityDomainsSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#create IdentityDomainsSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#delete IdentityDomainsSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#update IdentityDomainsSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSettingCertificateValidationOutputReference <a name="IdentityDomainsSettingCertificateValidationOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingCertificateValidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsSettingCertificateValidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlCheckOnOcspFailureEnabled">ResetCrlCheckOnOcspFailureEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlEnabled">ResetCrlEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlLocation">ResetCrlLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlRefreshInterval">ResetCrlRefreshInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspEnabled">ResetOcspEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspResponderUrl">ResetOcspResponderUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSettingsResponderUrlPreferred">ResetOcspSettingsResponderUrlPreferred</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSigningCertificateAlias">ResetOcspSigningCertificateAlias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspTimeoutDuration">ResetOcspTimeoutDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspUnknownResponseStatusAllowed">ResetOcspUnknownResponseStatusAllowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrlCheckOnOcspFailureEnabled` <a name="ResetCrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlCheckOnOcspFailureEnabled"></a>

```go
func ResetCrlCheckOnOcspFailureEnabled()
```

##### `ResetCrlEnabled` <a name="ResetCrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlEnabled"></a>

```go
func ResetCrlEnabled()
```

##### `ResetCrlLocation` <a name="ResetCrlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlLocation"></a>

```go
func ResetCrlLocation()
```

##### `ResetCrlRefreshInterval` <a name="ResetCrlRefreshInterval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlRefreshInterval"></a>

```go
func ResetCrlRefreshInterval()
```

##### `ResetOcspEnabled` <a name="ResetOcspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspEnabled"></a>

```go
func ResetOcspEnabled()
```

##### `ResetOcspResponderUrl` <a name="ResetOcspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspResponderUrl"></a>

```go
func ResetOcspResponderUrl()
```

##### `ResetOcspSettingsResponderUrlPreferred` <a name="ResetOcspSettingsResponderUrlPreferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSettingsResponderUrlPreferred"></a>

```go
func ResetOcspSettingsResponderUrlPreferred()
```

##### `ResetOcspSigningCertificateAlias` <a name="ResetOcspSigningCertificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSigningCertificateAlias"></a>

```go
func ResetOcspSigningCertificateAlias()
```

##### `ResetOcspTimeoutDuration` <a name="ResetOcspTimeoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspTimeoutDuration"></a>

```go
func ResetOcspTimeoutDuration()
```

##### `ResetOcspUnknownResponseStatusAllowed` <a name="ResetOcspUnknownResponseStatusAllowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspUnknownResponseStatusAllowed"></a>

```go
func ResetOcspUnknownResponseStatusAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabledInput">CrlCheckOnOcspFailureEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabledInput">CrlEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocationInput">CrlLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshIntervalInput">CrlRefreshIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabledInput">OcspEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrlInput">OcspResponderUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferredInput">OcspSettingsResponderUrlPreferredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAliasInput">OcspSigningCertificateAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDurationInput">OcspTimeoutDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowedInput">OcspUnknownResponseStatusAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabled">CrlCheckOnOcspFailureEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabled">CrlEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocation">CrlLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshInterval">CrlRefreshInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabled">OcspEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrl">OcspResponderUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferred">OcspSettingsResponderUrlPreferred</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAlias">OcspSigningCertificateAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDuration">OcspTimeoutDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowed">OcspUnknownResponseStatusAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrlCheckOnOcspFailureEnabledInput`<sup>Optional</sup> <a name="CrlCheckOnOcspFailureEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabledInput"></a>

```go
func CrlCheckOnOcspFailureEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CrlEnabledInput`<sup>Optional</sup> <a name="CrlEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabledInput"></a>

```go
func CrlEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CrlLocationInput`<sup>Optional</sup> <a name="CrlLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocationInput"></a>

```go
func CrlLocationInput() *string
```

- *Type:* *string

---

##### `CrlRefreshIntervalInput`<sup>Optional</sup> <a name="CrlRefreshIntervalInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshIntervalInput"></a>

```go
func CrlRefreshIntervalInput() *f64
```

- *Type:* *f64

---

##### `OcspEnabledInput`<sup>Optional</sup> <a name="OcspEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabledInput"></a>

```go
func OcspEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OcspResponderUrlInput`<sup>Optional</sup> <a name="OcspResponderUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrlInput"></a>

```go
func OcspResponderUrlInput() *string
```

- *Type:* *string

---

##### `OcspSettingsResponderUrlPreferredInput`<sup>Optional</sup> <a name="OcspSettingsResponderUrlPreferredInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferredInput"></a>

```go
func OcspSettingsResponderUrlPreferredInput() interface{}
```

- *Type:* interface{}

---

##### `OcspSigningCertificateAliasInput`<sup>Optional</sup> <a name="OcspSigningCertificateAliasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAliasInput"></a>

```go
func OcspSigningCertificateAliasInput() *string
```

- *Type:* *string

---

##### `OcspTimeoutDurationInput`<sup>Optional</sup> <a name="OcspTimeoutDurationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDurationInput"></a>

```go
func OcspTimeoutDurationInput() *f64
```

- *Type:* *f64

---

##### `OcspUnknownResponseStatusAllowedInput`<sup>Optional</sup> <a name="OcspUnknownResponseStatusAllowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowedInput"></a>

```go
func OcspUnknownResponseStatusAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `CrlCheckOnOcspFailureEnabled`<sup>Required</sup> <a name="CrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```go
func CrlCheckOnOcspFailureEnabled() interface{}
```

- *Type:* interface{}

---

##### `CrlEnabled`<sup>Required</sup> <a name="CrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabled"></a>

```go
func CrlEnabled() interface{}
```

- *Type:* interface{}

---

##### `CrlLocation`<sup>Required</sup> <a name="CrlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocation"></a>

```go
func CrlLocation() *string
```

- *Type:* *string

---

##### `CrlRefreshInterval`<sup>Required</sup> <a name="CrlRefreshInterval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshInterval"></a>

```go
func CrlRefreshInterval() *f64
```

- *Type:* *f64

---

##### `OcspEnabled`<sup>Required</sup> <a name="OcspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabled"></a>

```go
func OcspEnabled() interface{}
```

- *Type:* interface{}

---

##### `OcspResponderUrl`<sup>Required</sup> <a name="OcspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrl"></a>

```go
func OcspResponderUrl() *string
```

- *Type:* *string

---

##### `OcspSettingsResponderUrlPreferred`<sup>Required</sup> <a name="OcspSettingsResponderUrlPreferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferred"></a>

```go
func OcspSettingsResponderUrlPreferred() interface{}
```

- *Type:* interface{}

---

##### `OcspSigningCertificateAlias`<sup>Required</sup> <a name="OcspSigningCertificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAlias"></a>

```go
func OcspSigningCertificateAlias() *string
```

- *Type:* *string

---

##### `OcspTimeoutDuration`<sup>Required</sup> <a name="OcspTimeoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDuration"></a>

```go
func OcspTimeoutDuration() *f64
```

- *Type:* *f64

---

##### `OcspUnknownResponseStatusAllowed`<sup>Required</sup> <a name="OcspUnknownResponseStatusAllowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowed"></a>

```go
func OcspUnknownResponseStatusAllowed() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsSettingCertificateValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

---


### IdentityDomainsSettingCloudGateCorsSettingsOutputReference <a name="IdentityDomainsSettingCloudGateCorsSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingCloudGateCorsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsSettingCloudGateCorsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowedOrigins">ResetCloudGateCorsAllowedOrigins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowNullOrigin">ResetCloudGateCorsAllowNullOrigin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsEnabled">ResetCloudGateCorsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsExposedHeaders">ResetCloudGateCorsExposedHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsMaxAge">ResetCloudGateCorsMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudGateCorsAllowedOrigins` <a name="ResetCloudGateCorsAllowedOrigins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowedOrigins"></a>

```go
func ResetCloudGateCorsAllowedOrigins()
```

##### `ResetCloudGateCorsAllowNullOrigin` <a name="ResetCloudGateCorsAllowNullOrigin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowNullOrigin"></a>

```go
func ResetCloudGateCorsAllowNullOrigin()
```

##### `ResetCloudGateCorsEnabled` <a name="ResetCloudGateCorsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsEnabled"></a>

```go
func ResetCloudGateCorsEnabled()
```

##### `ResetCloudGateCorsExposedHeaders` <a name="ResetCloudGateCorsExposedHeaders" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsExposedHeaders"></a>

```go
func ResetCloudGateCorsExposedHeaders()
```

##### `ResetCloudGateCorsMaxAge` <a name="ResetCloudGateCorsMaxAge" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsMaxAge"></a>

```go
func ResetCloudGateCorsMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOriginsInput">CloudGateCorsAllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOriginInput">CloudGateCorsAllowNullOriginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabledInput">CloudGateCorsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeadersInput">CloudGateCorsExposedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAgeInput">CloudGateCorsMaxAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOrigins">CloudGateCorsAllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOrigin">CloudGateCorsAllowNullOrigin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabled">CloudGateCorsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeaders">CloudGateCorsExposedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAge">CloudGateCorsMaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudGateCorsAllowedOriginsInput`<sup>Optional</sup> <a name="CloudGateCorsAllowedOriginsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOriginsInput"></a>

```go
func CloudGateCorsAllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CloudGateCorsAllowNullOriginInput`<sup>Optional</sup> <a name="CloudGateCorsAllowNullOriginInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOriginInput"></a>

```go
func CloudGateCorsAllowNullOriginInput() interface{}
```

- *Type:* interface{}

---

##### `CloudGateCorsEnabledInput`<sup>Optional</sup> <a name="CloudGateCorsEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabledInput"></a>

```go
func CloudGateCorsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CloudGateCorsExposedHeadersInput`<sup>Optional</sup> <a name="CloudGateCorsExposedHeadersInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeadersInput"></a>

```go
func CloudGateCorsExposedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `CloudGateCorsMaxAgeInput`<sup>Optional</sup> <a name="CloudGateCorsMaxAgeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAgeInput"></a>

```go
func CloudGateCorsMaxAgeInput() *f64
```

- *Type:* *f64

---

##### `CloudGateCorsAllowedOrigins`<sup>Required</sup> <a name="CloudGateCorsAllowedOrigins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOrigins"></a>

```go
func CloudGateCorsAllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `CloudGateCorsAllowNullOrigin`<sup>Required</sup> <a name="CloudGateCorsAllowNullOrigin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOrigin"></a>

```go
func CloudGateCorsAllowNullOrigin() interface{}
```

- *Type:* interface{}

---

##### `CloudGateCorsEnabled`<sup>Required</sup> <a name="CloudGateCorsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabled"></a>

```go
func CloudGateCorsEnabled() interface{}
```

- *Type:* interface{}

---

##### `CloudGateCorsExposedHeaders`<sup>Required</sup> <a name="CloudGateCorsExposedHeaders" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeaders"></a>

```go
func CloudGateCorsExposedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `CloudGateCorsMaxAge`<sup>Required</sup> <a name="CloudGateCorsMaxAge" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAge"></a>

```go
func CloudGateCorsMaxAge() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsSettingCloudGateCorsSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

---


### IdentityDomainsSettingCompanyNamesList <a name="IdentityDomainsSettingCompanyNamesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingCompanyNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingCompanyNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingCompanyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingCompanyNamesOutputReference <a name="IdentityDomainsSettingCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingCompanyNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingCompanyNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.localeInput">LocaleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.localeInput"></a>

```go
func LocaleInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingDefaultCompanyNamesList <a name="IdentityDomainsSettingDefaultCompanyNamesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingDefaultCompanyNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingDefaultCompanyNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingDefaultCompanyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsSettingDefaultCompanyNamesOutputReference <a name="IdentityDomainsSettingDefaultCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingDefaultCompanyNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingDefaultCompanyNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames">IdentityDomainsSettingDefaultCompanyNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsSettingDefaultCompanyNames
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames">IdentityDomainsSettingDefaultCompanyNames</a>

---


### IdentityDomainsSettingDefaultImagesList <a name="IdentityDomainsSettingDefaultImagesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingDefaultImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingDefaultImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingDefaultImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsSettingDefaultImagesOutputReference <a name="IdentityDomainsSettingDefaultImagesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingDefaultImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingDefaultImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages">IdentityDomainsSettingDefaultImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsSettingDefaultImages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages">IdentityDomainsSettingDefaultImages</a>

---


### IdentityDomainsSettingDefaultLoginTextsList <a name="IdentityDomainsSettingDefaultLoginTextsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingDefaultLoginTextsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingDefaultLoginTextsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingDefaultLoginTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsSettingDefaultLoginTextsOutputReference <a name="IdentityDomainsSettingDefaultLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingDefaultLoginTextsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingDefaultLoginTextsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts">IdentityDomainsSettingDefaultLoginTexts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsSettingDefaultLoginTexts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts">IdentityDomainsSettingDefaultLoginTexts</a>

---


### IdentityDomainsSettingIdcsCreatedByList <a name="IdentityDomainsSettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsSettingIdcsCreatedByOutputReference <a name="IdentityDomainsSettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy">IdentityDomainsSettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsSettingIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy">IdentityDomainsSettingIdcsCreatedBy</a>

---


### IdentityDomainsSettingIdcsLastModifiedByList <a name="IdentityDomainsSettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsSettingIdcsLastModifiedByOutputReference <a name="IdentityDomainsSettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy">IdentityDomainsSettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsSettingIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy">IdentityDomainsSettingIdcsLastModifiedBy</a>

---


### IdentityDomainsSettingImagesList <a name="IdentityDomainsSettingImagesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingImagesOutputReference <a name="IdentityDomainsSettingImagesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplay` <a name="ResetDisplay" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resetDisplay"></a>

```go
func ResetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.displayInput">DisplayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.displayInput"></a>

```go
func DisplayInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingLoginTextsList <a name="IdentityDomainsSettingLoginTextsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingLoginTextsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingLoginTextsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingLoginTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingLoginTextsOutputReference <a name="IdentityDomainsSettingLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingLoginTextsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingLoginTextsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.localeInput">LocaleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.localeInput"></a>

```go
func LocaleInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingMetaList <a name="IdentityDomainsSettingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsSettingMetaOutputReference <a name="IdentityDomainsSettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta">IdentityDomainsSettingMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsSettingMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta">IdentityDomainsSettingMeta</a>

---


### IdentityDomainsSettingPurgeConfigsList <a name="IdentityDomainsSettingPurgeConfigsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingPurgeConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingPurgeConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingPurgeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingPurgeConfigsOutputReference <a name="IdentityDomainsSettingPurgeConfigsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingPurgeConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingPurgeConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriod"></a>

```go
func RetentionPeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingTagsList <a name="IdentityDomainsSettingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingTagsOutputReference <a name="IdentityDomainsSettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingTenantCustomClaimsList <a name="IdentityDomainsSettingTenantCustomClaimsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingTenantCustomClaimsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsSettingTenantCustomClaimsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.get"></a>

```go
func Get(index *f64) IdentityDomainsSettingTenantCustomClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingTenantCustomClaimsOutputReference <a name="IdentityDomainsSettingTenantCustomClaimsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingTenantCustomClaimsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsSettingTenantCustomClaimsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopes` <a name="ResetScopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resetScopes"></a>

```go
func ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopesInput">AllScopesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopes">AllScopes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expression">Expression</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllScopesInput`<sup>Optional</sup> <a name="AllScopesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopesInput"></a>

```go
func AllScopesInput() interface{}
```

- *Type:* interface{}

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `AllScopes`<sup>Required</sup> <a name="AllScopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopes"></a>

```go
func AllScopes() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expression"></a>

```go
func Expression() interface{}
```

- *Type:* interface{}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsSettingTimeoutsOutputReference <a name="IdentityDomainsSettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainssetting"

identitydomainssetting.NewIdentityDomainsSettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsSettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



