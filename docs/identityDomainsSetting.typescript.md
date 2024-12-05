# `identityDomainsSetting` Submodule <a name="`identityDomainsSetting` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSetting <a name="IdentityDomainsSetting" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting oci_identity_domains_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSetting(scope: Construct, id: string, config: IdentityDomainsSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig">IdentityDomainsSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig">IdentityDomainsSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation">putCertificateValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings">putCloudGateCorsSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCompanyNames">putCompanyNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putImages">putImages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putLoginTexts">putLoginTexts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putPurgeConfigs">putPurgeConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTenantCustomClaims">putTenantCustomClaims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAccountAlwaysTrustScope">resetAccountAlwaysTrustScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedForgotPasswordFlowReturnUrls">resetAllowedForgotPasswordFlowReturnUrls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedNotificationRedirectUrls">resetAllowedNotificationRedirectUrls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuditEventRetentionPeriod">resetAuditEventRetentionPeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCertificateValidation">resetCertificateValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudGateCorsSettings">resetCloudGateCorsSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationCustomUrl">resetCloudMigrationCustomUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationUrlEnabled">resetCloudMigrationUrlEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCompanyNames">resetCompanyNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetContactEmails">resetContactEmails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomBranding">resetCustomBranding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomCssLocation">resetCustomCssLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomHtmlLocation">resetCustomHtmlLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomTranslation">resetCustomTranslation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDefaultTrustScope">resetDefaultTrustScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticLevel">resetDiagnosticLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticRecordForSearchIdentifiesReturnedResources">resetDiagnosticRecordForSearchIdentifiesReturnedResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetEnableTermsOfUse">resetEnableTermsOfUse</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIamUpstSessionExpiry">resetIamUpstSessionExpiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetImages">resetImages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIsHostedPage">resetIsHostedPage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLoginTexts">resetLoginTexts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppCmvaToReturn">resetMaxNoOfAppCmvaToReturn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppRoleMembersToReturn">resetMaxNoOfAppRoleMembersToReturn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPreferredLanguage">resetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrevIssuer">resetPrevIssuer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrivacyPolicyUrl">resetPrivacyPolicyUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPurgeConfigs">resetPurgeConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthFactor">resetReAuthFactor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthWhenChangingMyAuthenticationFactors">resetReAuthWhenChangingMyAuthenticationFactors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetServiceAdminCannotListOtherUsers">resetServiceAdminCannotListOtherUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSigningCertPublicAccess">resetSigningCertPublicAccess</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSubMappingAttr">resetSubMappingAttr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTenantCustomClaims">resetTenantCustomClaims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTermsOfUseUrl">resetTermsOfUseUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificateValidation` <a name="putCertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation"></a>

```typescript
public putCertificateValidation(value: IdentityDomainsSettingCertificateValidation): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

---

##### `putCloudGateCorsSettings` <a name="putCloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings"></a>

```typescript
public putCloudGateCorsSettings(value: IdentityDomainsSettingCloudGateCorsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

---

##### `putCompanyNames` <a name="putCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCompanyNames"></a>

```typescript
public putCompanyNames(value: IResolvable | IdentityDomainsSettingCompanyNames[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCompanyNames.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>[]

---

##### `putImages` <a name="putImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putImages"></a>

```typescript
public putImages(value: IResolvable | IdentityDomainsSettingImages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putImages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>[]

---

##### `putLoginTexts` <a name="putLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putLoginTexts"></a>

```typescript
public putLoginTexts(value: IResolvable | IdentityDomainsSettingLoginTexts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putLoginTexts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>[]

---

##### `putPurgeConfigs` <a name="putPurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putPurgeConfigs"></a>

```typescript
public putPurgeConfigs(value: IResolvable | IdentityDomainsSettingPurgeConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putPurgeConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>[]

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTags"></a>

```typescript
public putTags(value: IResolvable | IdentityDomainsSettingTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>[]

---

##### `putTenantCustomClaims` <a name="putTenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTenantCustomClaims"></a>

```typescript
public putTenantCustomClaims(value: IResolvable | IdentityDomainsSettingTenantCustomClaims[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTenantCustomClaims.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityDomainsSettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>

---

##### `resetAccountAlwaysTrustScope` <a name="resetAccountAlwaysTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAccountAlwaysTrustScope"></a>

```typescript
public resetAccountAlwaysTrustScope(): void
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedDomains"></a>

```typescript
public resetAllowedDomains(): void
```

##### `resetAllowedForgotPasswordFlowReturnUrls` <a name="resetAllowedForgotPasswordFlowReturnUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedForgotPasswordFlowReturnUrls"></a>

```typescript
public resetAllowedForgotPasswordFlowReturnUrls(): void
```

##### `resetAllowedNotificationRedirectUrls` <a name="resetAllowedNotificationRedirectUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedNotificationRedirectUrls"></a>

```typescript
public resetAllowedNotificationRedirectUrls(): void
```

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuditEventRetentionPeriod` <a name="resetAuditEventRetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuditEventRetentionPeriod"></a>

```typescript
public resetAuditEventRetentionPeriod(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCertificateValidation` <a name="resetCertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCertificateValidation"></a>

```typescript
public resetCertificateValidation(): void
```

##### `resetCloudGateCorsSettings` <a name="resetCloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudGateCorsSettings"></a>

```typescript
public resetCloudGateCorsSettings(): void
```

##### `resetCloudMigrationCustomUrl` <a name="resetCloudMigrationCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationCustomUrl"></a>

```typescript
public resetCloudMigrationCustomUrl(): void
```

##### `resetCloudMigrationUrlEnabled` <a name="resetCloudMigrationUrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationUrlEnabled"></a>

```typescript
public resetCloudMigrationUrlEnabled(): void
```

##### `resetCompanyNames` <a name="resetCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCompanyNames"></a>

```typescript
public resetCompanyNames(): void
```

##### `resetContactEmails` <a name="resetContactEmails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetContactEmails"></a>

```typescript
public resetContactEmails(): void
```

##### `resetCustomBranding` <a name="resetCustomBranding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomBranding"></a>

```typescript
public resetCustomBranding(): void
```

##### `resetCustomCssLocation` <a name="resetCustomCssLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomCssLocation"></a>

```typescript
public resetCustomCssLocation(): void
```

##### `resetCustomHtmlLocation` <a name="resetCustomHtmlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomHtmlLocation"></a>

```typescript
public resetCustomHtmlLocation(): void
```

##### `resetCustomTranslation` <a name="resetCustomTranslation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomTranslation"></a>

```typescript
public resetCustomTranslation(): void
```

##### `resetDefaultTrustScope` <a name="resetDefaultTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDefaultTrustScope"></a>

```typescript
public resetDefaultTrustScope(): void
```

##### `resetDiagnosticLevel` <a name="resetDiagnosticLevel" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticLevel"></a>

```typescript
public resetDiagnosticLevel(): void
```

##### `resetDiagnosticRecordForSearchIdentifiesReturnedResources` <a name="resetDiagnosticRecordForSearchIdentifiesReturnedResources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticRecordForSearchIdentifiesReturnedResources"></a>

```typescript
public resetDiagnosticRecordForSearchIdentifiesReturnedResources(): void
```

##### `resetEnableTermsOfUse` <a name="resetEnableTermsOfUse" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetEnableTermsOfUse"></a>

```typescript
public resetEnableTermsOfUse(): void
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetIamUpstSessionExpiry` <a name="resetIamUpstSessionExpiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIamUpstSessionExpiry"></a>

```typescript
public resetIamUpstSessionExpiry(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImages` <a name="resetImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetImages"></a>

```typescript
public resetImages(): void
```

##### `resetIsHostedPage` <a name="resetIsHostedPage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIsHostedPage"></a>

```typescript
public resetIsHostedPage(): void
```

##### `resetIssuer` <a name="resetIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetLocale` <a name="resetLocale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLocale"></a>

```typescript
public resetLocale(): void
```

##### `resetLoginTexts` <a name="resetLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLoginTexts"></a>

```typescript
public resetLoginTexts(): void
```

##### `resetMaxNoOfAppCmvaToReturn` <a name="resetMaxNoOfAppCmvaToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppCmvaToReturn"></a>

```typescript
public resetMaxNoOfAppCmvaToReturn(): void
```

##### `resetMaxNoOfAppRoleMembersToReturn` <a name="resetMaxNoOfAppRoleMembersToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppRoleMembersToReturn"></a>

```typescript
public resetMaxNoOfAppRoleMembersToReturn(): void
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPreferredLanguage"></a>

```typescript
public resetPreferredLanguage(): void
```

##### `resetPrevIssuer` <a name="resetPrevIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrevIssuer"></a>

```typescript
public resetPrevIssuer(): void
```

##### `resetPrivacyPolicyUrl` <a name="resetPrivacyPolicyUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrivacyPolicyUrl"></a>

```typescript
public resetPrivacyPolicyUrl(): void
```

##### `resetPurgeConfigs` <a name="resetPurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPurgeConfigs"></a>

```typescript
public resetPurgeConfigs(): void
```

##### `resetReAuthFactor` <a name="resetReAuthFactor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthFactor"></a>

```typescript
public resetReAuthFactor(): void
```

##### `resetReAuthWhenChangingMyAuthenticationFactors` <a name="resetReAuthWhenChangingMyAuthenticationFactors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthWhenChangingMyAuthenticationFactors"></a>

```typescript
public resetReAuthWhenChangingMyAuthenticationFactors(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetServiceAdminCannotListOtherUsers` <a name="resetServiceAdminCannotListOtherUsers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetServiceAdminCannotListOtherUsers"></a>

```typescript
public resetServiceAdminCannotListOtherUsers(): void
```

##### `resetSigningCertPublicAccess` <a name="resetSigningCertPublicAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSigningCertPublicAccess"></a>

```typescript
public resetSigningCertPublicAccess(): void
```

##### `resetSubMappingAttr` <a name="resetSubMappingAttr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSubMappingAttr"></a>

```typescript
public resetSubMappingAttr(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantCustomClaims` <a name="resetTenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTenantCustomClaims"></a>

```typescript
public resetTenantCustomClaims(): void
```

##### `resetTermsOfUseUrl` <a name="resetTermsOfUseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTermsOfUseUrl"></a>

```typescript
public resetTermsOfUseUrl(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimezone` <a name="resetTimezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isConstruct"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

identityDomainsSetting.IdentityDomainsSetting.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformElement"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

identityDomainsSetting.IdentityDomainsSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformResource"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

identityDomainsSetting.IdentityDomainsSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityDomainsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidation">certificateValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference">IdentityDomainsSettingCertificateValidationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudAccountName">cloudAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettings">cloudGateCorsSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference">IdentityDomainsSettingCloudGateCorsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNames">companyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList">IdentityDomainsSettingCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultCompanyNames">defaultCompanyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList">IdentityDomainsSettingDefaultCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultImages">defaultImages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList">IdentityDomainsSettingDefaultImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultLoginTexts">defaultLoginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList">IdentityDomainsSettingDefaultLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticTracingUpto">diagnosticTracingUpto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList">IdentityDomainsSettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList">IdentityDomainsSettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.images">images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList">IdentityDomainsSettingImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTexts">loginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList">IdentityDomainsSettingLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList">IdentityDomainsSettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.migrationStatus">migrationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.onPremisesProvisioning">onPremisesProvisioning</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigs">purgeConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList">IdentityDomainsSettingPurgeConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList">IdentityDomainsSettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaims">tenantCustomClaims</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList">IdentityDomainsSettingTenantCustomClaimsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference">IdentityDomainsSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScopeInput">accountAlwaysTrustScopeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrlsInput">allowedForgotPasswordFlowReturnUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrlsInput">allowedNotificationRedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriodInput">auditEventRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidationInput">certificateValidationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettingsInput">cloudGateCorsSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrlInput">cloudMigrationCustomUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabledInput">cloudMigrationUrlEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNamesInput">companyNamesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmailsInput">contactEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccessInput">csrAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBrandingInput">customBrandingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocationInput">customCssLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocationInput">customHtmlLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslationInput">customTranslationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScopeInput">defaultTrustScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevelInput">diagnosticLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResourcesInput">diagnosticRecordForSearchIdentifiesReturnedResourcesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUseInput">enableTermsOfUseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiryInput">iamUpstSessionExpiryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.imagesInput">imagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPageInput">isHostedPageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTextsInput">loginTextsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturnInput">maxNoOfAppCmvaToReturnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturnInput">maxNoOfAppRoleMembersToReturnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuerInput">prevIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrlInput">privacyPolicyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigsInput">purgeConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactorInput">reAuthFactorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactorsInput">reAuthWhenChangingMyAuthenticationFactorsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsersInput">serviceAdminCannotListOtherUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingIdInput">settingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccessInput">signingCertPublicAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttrInput">subMappingAttrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaimsInput">tenantCustomClaimsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrlInput">termsOfUseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScope">accountAlwaysTrustScope</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomains">allowedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrls">allowedForgotPasswordFlowReturnUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrls">allowedNotificationRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriod">auditEventRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrl">cloudMigrationCustomUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabled">cloudMigrationUrlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmails">contactEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccess">csrAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBranding">customBranding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocation">customCssLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocation">customHtmlLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslation">customTranslation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScope">defaultTrustScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevel">diagnosticLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResources">diagnosticRecordForSearchIdentifiesReturnedResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUse">enableTermsOfUse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiry">iamUpstSessionExpiry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPage">isHostedPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturn">maxNoOfAppCmvaToReturn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturn">maxNoOfAppRoleMembersToReturn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuer">prevIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrl">privacyPolicyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactor">reAuthFactor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactors">reAuthWhenChangingMyAuthenticationFactors</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsers">serviceAdminCannotListOtherUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingId">settingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccess">signingCertPublicAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttr">subMappingAttr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrl">termsOfUseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateValidation`<sup>Required</sup> <a name="certificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidation"></a>

```typescript
public readonly certificateValidation: IdentityDomainsSettingCertificateValidationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference">IdentityDomainsSettingCertificateValidationOutputReference</a>

---

##### `cloudAccountName`<sup>Required</sup> <a name="cloudAccountName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudAccountName"></a>

```typescript
public readonly cloudAccountName: string;
```

- *Type:* string

---

##### `cloudGateCorsSettings`<sup>Required</sup> <a name="cloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettings"></a>

```typescript
public readonly cloudGateCorsSettings: IdentityDomainsSettingCloudGateCorsSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference">IdentityDomainsSettingCloudGateCorsSettingsOutputReference</a>

---

##### `companyNames`<sup>Required</sup> <a name="companyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNames"></a>

```typescript
public readonly companyNames: IdentityDomainsSettingCompanyNamesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList">IdentityDomainsSettingCompanyNamesList</a>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `defaultCompanyNames`<sup>Required</sup> <a name="defaultCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultCompanyNames"></a>

```typescript
public readonly defaultCompanyNames: IdentityDomainsSettingDefaultCompanyNamesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList">IdentityDomainsSettingDefaultCompanyNamesList</a>

---

##### `defaultImages`<sup>Required</sup> <a name="defaultImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultImages"></a>

```typescript
public readonly defaultImages: IdentityDomainsSettingDefaultImagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList">IdentityDomainsSettingDefaultImagesList</a>

---

##### `defaultLoginTexts`<sup>Required</sup> <a name="defaultLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultLoginTexts"></a>

```typescript
public readonly defaultLoginTexts: IdentityDomainsSettingDefaultLoginTextsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList">IdentityDomainsSettingDefaultLoginTextsList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `diagnosticTracingUpto`<sup>Required</sup> <a name="diagnosticTracingUpto" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticTracingUpto"></a>

```typescript
public readonly diagnosticTracingUpto: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: IdentityDomainsSettingIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList">IdentityDomainsSettingIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: IdentityDomainsSettingIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList">IdentityDomainsSettingIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `images`<sup>Required</sup> <a name="images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.images"></a>

```typescript
public readonly images: IdentityDomainsSettingImagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList">IdentityDomainsSettingImagesList</a>

---

##### `loginTexts`<sup>Required</sup> <a name="loginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTexts"></a>

```typescript
public readonly loginTexts: IdentityDomainsSettingLoginTextsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList">IdentityDomainsSettingLoginTextsList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.meta"></a>

```typescript
public readonly meta: IdentityDomainsSettingMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList">IdentityDomainsSettingMetaList</a>

---

##### `migrationStatus`<sup>Required</sup> <a name="migrationStatus" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.migrationStatus"></a>

```typescript
public readonly migrationStatus: string;
```

- *Type:* string

---

##### `onPremisesProvisioning`<sup>Required</sup> <a name="onPremisesProvisioning" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.onPremisesProvisioning"></a>

```typescript
public readonly onPremisesProvisioning: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `purgeConfigs`<sup>Required</sup> <a name="purgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigs"></a>

```typescript
public readonly purgeConfigs: IdentityDomainsSettingPurgeConfigsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList">IdentityDomainsSettingPurgeConfigsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tags"></a>

```typescript
public readonly tags: IdentityDomainsSettingTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList">IdentityDomainsSettingTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `tenantCustomClaims`<sup>Required</sup> <a name="tenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaims"></a>

```typescript
public readonly tenantCustomClaims: IdentityDomainsSettingTenantCustomClaimsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList">IdentityDomainsSettingTenantCustomClaimsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsSettingTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference">IdentityDomainsSettingTimeoutsOutputReference</a>

---

##### `accountAlwaysTrustScopeInput`<sup>Optional</sup> <a name="accountAlwaysTrustScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScopeInput"></a>

```typescript
public readonly accountAlwaysTrustScopeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomainsInput"></a>

```typescript
public readonly allowedDomainsInput: string[];
```

- *Type:* string[]

---

##### `allowedForgotPasswordFlowReturnUrlsInput`<sup>Optional</sup> <a name="allowedForgotPasswordFlowReturnUrlsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrlsInput"></a>

```typescript
public readonly allowedForgotPasswordFlowReturnUrlsInput: string[];
```

- *Type:* string[]

---

##### `allowedNotificationRedirectUrlsInput`<sup>Optional</sup> <a name="allowedNotificationRedirectUrlsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrlsInput"></a>

```typescript
public readonly allowedNotificationRedirectUrlsInput: string[];
```

- *Type:* string[]

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `auditEventRetentionPeriodInput`<sup>Optional</sup> <a name="auditEventRetentionPeriodInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriodInput"></a>

```typescript
public readonly auditEventRetentionPeriodInput: number;
```

- *Type:* number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `certificateValidationInput`<sup>Optional</sup> <a name="certificateValidationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidationInput"></a>

```typescript
public readonly certificateValidationInput: IdentityDomainsSettingCertificateValidation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

---

##### `cloudGateCorsSettingsInput`<sup>Optional</sup> <a name="cloudGateCorsSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettingsInput"></a>

```typescript
public readonly cloudGateCorsSettingsInput: IdentityDomainsSettingCloudGateCorsSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

---

##### `cloudMigrationCustomUrlInput`<sup>Optional</sup> <a name="cloudMigrationCustomUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrlInput"></a>

```typescript
public readonly cloudMigrationCustomUrlInput: string;
```

- *Type:* string

---

##### `cloudMigrationUrlEnabledInput`<sup>Optional</sup> <a name="cloudMigrationUrlEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabledInput"></a>

```typescript
public readonly cloudMigrationUrlEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `companyNamesInput`<sup>Optional</sup> <a name="companyNamesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNamesInput"></a>

```typescript
public readonly companyNamesInput: IResolvable | IdentityDomainsSettingCompanyNames[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>[]

---

##### `contactEmailsInput`<sup>Optional</sup> <a name="contactEmailsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmailsInput"></a>

```typescript
public readonly contactEmailsInput: string[];
```

- *Type:* string[]

---

##### `csrAccessInput`<sup>Optional</sup> <a name="csrAccessInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccessInput"></a>

```typescript
public readonly csrAccessInput: string;
```

- *Type:* string

---

##### `customBrandingInput`<sup>Optional</sup> <a name="customBrandingInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBrandingInput"></a>

```typescript
public readonly customBrandingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customCssLocationInput`<sup>Optional</sup> <a name="customCssLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocationInput"></a>

```typescript
public readonly customCssLocationInput: string;
```

- *Type:* string

---

##### `customHtmlLocationInput`<sup>Optional</sup> <a name="customHtmlLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocationInput"></a>

```typescript
public readonly customHtmlLocationInput: string;
```

- *Type:* string

---

##### `customTranslationInput`<sup>Optional</sup> <a name="customTranslationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslationInput"></a>

```typescript
public readonly customTranslationInput: string;
```

- *Type:* string

---

##### `defaultTrustScopeInput`<sup>Optional</sup> <a name="defaultTrustScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScopeInput"></a>

```typescript
public readonly defaultTrustScopeInput: string;
```

- *Type:* string

---

##### `diagnosticLevelInput`<sup>Optional</sup> <a name="diagnosticLevelInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevelInput"></a>

```typescript
public readonly diagnosticLevelInput: number;
```

- *Type:* number

---

##### `diagnosticRecordForSearchIdentifiesReturnedResourcesInput`<sup>Optional</sup> <a name="diagnosticRecordForSearchIdentifiesReturnedResourcesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResourcesInput"></a>

```typescript
public readonly diagnosticRecordForSearchIdentifiesReturnedResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTermsOfUseInput`<sup>Optional</sup> <a name="enableTermsOfUseInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUseInput"></a>

```typescript
public readonly enableTermsOfUseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `iamUpstSessionExpiryInput`<sup>Optional</sup> <a name="iamUpstSessionExpiryInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiryInput"></a>

```typescript
public readonly iamUpstSessionExpiryInput: number;
```

- *Type:* number

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imagesInput`<sup>Optional</sup> <a name="imagesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.imagesInput"></a>

```typescript
public readonly imagesInput: IResolvable | IdentityDomainsSettingImages[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>[]

---

##### `isHostedPageInput`<sup>Optional</sup> <a name="isHostedPageInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPageInput"></a>

```typescript
public readonly isHostedPageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `loginTextsInput`<sup>Optional</sup> <a name="loginTextsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTextsInput"></a>

```typescript
public readonly loginTextsInput: IResolvable | IdentityDomainsSettingLoginTexts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>[]

---

##### `maxNoOfAppCmvaToReturnInput`<sup>Optional</sup> <a name="maxNoOfAppCmvaToReturnInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturnInput"></a>

```typescript
public readonly maxNoOfAppCmvaToReturnInput: number;
```

- *Type:* number

---

##### `maxNoOfAppRoleMembersToReturnInput`<sup>Optional</sup> <a name="maxNoOfAppRoleMembersToReturnInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturnInput"></a>

```typescript
public readonly maxNoOfAppRoleMembersToReturnInput: number;
```

- *Type:* number

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguageInput"></a>

```typescript
public readonly preferredLanguageInput: string;
```

- *Type:* string

---

##### `prevIssuerInput`<sup>Optional</sup> <a name="prevIssuerInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuerInput"></a>

```typescript
public readonly prevIssuerInput: string;
```

- *Type:* string

---

##### `privacyPolicyUrlInput`<sup>Optional</sup> <a name="privacyPolicyUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrlInput"></a>

```typescript
public readonly privacyPolicyUrlInput: string;
```

- *Type:* string

---

##### `purgeConfigsInput`<sup>Optional</sup> <a name="purgeConfigsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigsInput"></a>

```typescript
public readonly purgeConfigsInput: IResolvable | IdentityDomainsSettingPurgeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>[]

---

##### `reAuthFactorInput`<sup>Optional</sup> <a name="reAuthFactorInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactorInput"></a>

```typescript
public readonly reAuthFactorInput: string[];
```

- *Type:* string[]

---

##### `reAuthWhenChangingMyAuthenticationFactorsInput`<sup>Optional</sup> <a name="reAuthWhenChangingMyAuthenticationFactorsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactorsInput"></a>

```typescript
public readonly reAuthWhenChangingMyAuthenticationFactorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `serviceAdminCannotListOtherUsersInput`<sup>Optional</sup> <a name="serviceAdminCannotListOtherUsersInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsersInput"></a>

```typescript
public readonly serviceAdminCannotListOtherUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settingIdInput`<sup>Optional</sup> <a name="settingIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingIdInput"></a>

```typescript
public readonly settingIdInput: string;
```

- *Type:* string

---

##### `signingCertPublicAccessInput`<sup>Optional</sup> <a name="signingCertPublicAccessInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccessInput"></a>

```typescript
public readonly signingCertPublicAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subMappingAttrInput`<sup>Optional</sup> <a name="subMappingAttrInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttrInput"></a>

```typescript
public readonly subMappingAttrInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IdentityDomainsSettingTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>[]

---

##### `tenantCustomClaimsInput`<sup>Optional</sup> <a name="tenantCustomClaimsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaimsInput"></a>

```typescript
public readonly tenantCustomClaimsInput: IResolvable | IdentityDomainsSettingTenantCustomClaims[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>[]

---

##### `termsOfUseUrlInput`<sup>Optional</sup> <a name="termsOfUseUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrlInput"></a>

```typescript
public readonly termsOfUseUrlInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityDomainsSettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `accountAlwaysTrustScope`<sup>Required</sup> <a name="accountAlwaysTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScope"></a>

```typescript
public readonly accountAlwaysTrustScope: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string[];
```

- *Type:* string[]

---

##### `allowedForgotPasswordFlowReturnUrls`<sup>Required</sup> <a name="allowedForgotPasswordFlowReturnUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrls"></a>

```typescript
public readonly allowedForgotPasswordFlowReturnUrls: string[];
```

- *Type:* string[]

---

##### `allowedNotificationRedirectUrls`<sup>Required</sup> <a name="allowedNotificationRedirectUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrls"></a>

```typescript
public readonly allowedNotificationRedirectUrls: string[];
```

- *Type:* string[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `auditEventRetentionPeriod`<sup>Required</sup> <a name="auditEventRetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriod"></a>

```typescript
public readonly auditEventRetentionPeriod: number;
```

- *Type:* number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `cloudMigrationCustomUrl`<sup>Required</sup> <a name="cloudMigrationCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrl"></a>

```typescript
public readonly cloudMigrationCustomUrl: string;
```

- *Type:* string

---

##### `cloudMigrationUrlEnabled`<sup>Required</sup> <a name="cloudMigrationUrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabled"></a>

```typescript
public readonly cloudMigrationUrlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contactEmails`<sup>Required</sup> <a name="contactEmails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmails"></a>

```typescript
public readonly contactEmails: string[];
```

- *Type:* string[]

---

##### `csrAccess`<sup>Required</sup> <a name="csrAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccess"></a>

```typescript
public readonly csrAccess: string;
```

- *Type:* string

---

##### `customBranding`<sup>Required</sup> <a name="customBranding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBranding"></a>

```typescript
public readonly customBranding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customCssLocation`<sup>Required</sup> <a name="customCssLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocation"></a>

```typescript
public readonly customCssLocation: string;
```

- *Type:* string

---

##### `customHtmlLocation`<sup>Required</sup> <a name="customHtmlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocation"></a>

```typescript
public readonly customHtmlLocation: string;
```

- *Type:* string

---

##### `customTranslation`<sup>Required</sup> <a name="customTranslation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslation"></a>

```typescript
public readonly customTranslation: string;
```

- *Type:* string

---

##### `defaultTrustScope`<sup>Required</sup> <a name="defaultTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScope"></a>

```typescript
public readonly defaultTrustScope: string;
```

- *Type:* string

---

##### `diagnosticLevel`<sup>Required</sup> <a name="diagnosticLevel" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevel"></a>

```typescript
public readonly diagnosticLevel: number;
```

- *Type:* number

---

##### `diagnosticRecordForSearchIdentifiesReturnedResources`<sup>Required</sup> <a name="diagnosticRecordForSearchIdentifiesReturnedResources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResources"></a>

```typescript
public readonly diagnosticRecordForSearchIdentifiesReturnedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTermsOfUse`<sup>Required</sup> <a name="enableTermsOfUse" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUse"></a>

```typescript
public readonly enableTermsOfUse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `iamUpstSessionExpiry`<sup>Required</sup> <a name="iamUpstSessionExpiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiry"></a>

```typescript
public readonly iamUpstSessionExpiry: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `isHostedPage`<sup>Required</sup> <a name="isHostedPage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPage"></a>

```typescript
public readonly isHostedPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `maxNoOfAppCmvaToReturn`<sup>Required</sup> <a name="maxNoOfAppCmvaToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturn"></a>

```typescript
public readonly maxNoOfAppCmvaToReturn: number;
```

- *Type:* number

---

##### `maxNoOfAppRoleMembersToReturn`<sup>Required</sup> <a name="maxNoOfAppRoleMembersToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturn"></a>

```typescript
public readonly maxNoOfAppRoleMembersToReturn: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `prevIssuer`<sup>Required</sup> <a name="prevIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuer"></a>

```typescript
public readonly prevIssuer: string;
```

- *Type:* string

---

##### `privacyPolicyUrl`<sup>Required</sup> <a name="privacyPolicyUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrl"></a>

```typescript
public readonly privacyPolicyUrl: string;
```

- *Type:* string

---

##### `reAuthFactor`<sup>Required</sup> <a name="reAuthFactor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactor"></a>

```typescript
public readonly reAuthFactor: string[];
```

- *Type:* string[]

---

##### `reAuthWhenChangingMyAuthenticationFactors`<sup>Required</sup> <a name="reAuthWhenChangingMyAuthenticationFactors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactors"></a>

```typescript
public readonly reAuthWhenChangingMyAuthenticationFactors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `serviceAdminCannotListOtherUsers`<sup>Required</sup> <a name="serviceAdminCannotListOtherUsers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsers"></a>

```typescript
public readonly serviceAdminCannotListOtherUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settingId`<sup>Required</sup> <a name="settingId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingId"></a>

```typescript
public readonly settingId: string;
```

- *Type:* string

---

##### `signingCertPublicAccess`<sup>Required</sup> <a name="signingCertPublicAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccess"></a>

```typescript
public readonly signingCertPublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subMappingAttr`<sup>Required</sup> <a name="subMappingAttr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttr"></a>

```typescript
public readonly subMappingAttr: string;
```

- *Type:* string

---

##### `termsOfUseUrl`<sup>Required</sup> <a name="termsOfUseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrl"></a>

```typescript
public readonly termsOfUseUrl: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSettingCertificateValidation <a name="IdentityDomainsSettingCertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingCertificateValidation: identityDomainsSetting.IdentityDomainsSettingCertificateValidation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlCheckOnOcspFailureEnabled">crlCheckOnOcspFailureEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_check_on_ocsp_failure_enabled IdentityDomainsSetting#crl_check_on_ocsp_failure_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlEnabled">crlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_enabled IdentityDomainsSetting#crl_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlLocation">crlLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_location IdentityDomainsSetting#crl_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlRefreshInterval">crlRefreshInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_refresh_interval IdentityDomainsSetting#crl_refresh_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspEnabled">ocspEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_enabled IdentityDomainsSetting#ocsp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspResponderUrl">ocspResponderUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_responder_url IdentityDomainsSetting#ocsp_responder_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSettingsResponderUrlPreferred">ocspSettingsResponderUrlPreferred</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_settings_responder_url_preferred IdentityDomainsSetting#ocsp_settings_responder_url_preferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSigningCertificateAlias">ocspSigningCertificateAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_signing_certificate_alias IdentityDomainsSetting#ocsp_signing_certificate_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspTimeoutDuration">ocspTimeoutDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_timeout_duration IdentityDomainsSetting#ocsp_timeout_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspUnknownResponseStatusAllowed">ocspUnknownResponseStatusAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_unknown_response_status_allowed IdentityDomainsSetting#ocsp_unknown_response_status_allowed}. |

---

##### `crlCheckOnOcspFailureEnabled`<sup>Optional</sup> <a name="crlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlCheckOnOcspFailureEnabled"></a>

```typescript
public readonly crlCheckOnOcspFailureEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_check_on_ocsp_failure_enabled IdentityDomainsSetting#crl_check_on_ocsp_failure_enabled}.

---

##### `crlEnabled`<sup>Optional</sup> <a name="crlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlEnabled"></a>

```typescript
public readonly crlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_enabled IdentityDomainsSetting#crl_enabled}.

---

##### `crlLocation`<sup>Optional</sup> <a name="crlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlLocation"></a>

```typescript
public readonly crlLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_location IdentityDomainsSetting#crl_location}.

---

##### `crlRefreshInterval`<sup>Optional</sup> <a name="crlRefreshInterval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlRefreshInterval"></a>

```typescript
public readonly crlRefreshInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_refresh_interval IdentityDomainsSetting#crl_refresh_interval}.

---

##### `ocspEnabled`<sup>Optional</sup> <a name="ocspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspEnabled"></a>

```typescript
public readonly ocspEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_enabled IdentityDomainsSetting#ocsp_enabled}.

---

##### `ocspResponderUrl`<sup>Optional</sup> <a name="ocspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspResponderUrl"></a>

```typescript
public readonly ocspResponderUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_responder_url IdentityDomainsSetting#ocsp_responder_url}.

---

##### `ocspSettingsResponderUrlPreferred`<sup>Optional</sup> <a name="ocspSettingsResponderUrlPreferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSettingsResponderUrlPreferred"></a>

```typescript
public readonly ocspSettingsResponderUrlPreferred: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_settings_responder_url_preferred IdentityDomainsSetting#ocsp_settings_responder_url_preferred}.

---

##### `ocspSigningCertificateAlias`<sup>Optional</sup> <a name="ocspSigningCertificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSigningCertificateAlias"></a>

```typescript
public readonly ocspSigningCertificateAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_signing_certificate_alias IdentityDomainsSetting#ocsp_signing_certificate_alias}.

---

##### `ocspTimeoutDuration`<sup>Optional</sup> <a name="ocspTimeoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspTimeoutDuration"></a>

```typescript
public readonly ocspTimeoutDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_timeout_duration IdentityDomainsSetting#ocsp_timeout_duration}.

---

##### `ocspUnknownResponseStatusAllowed`<sup>Optional</sup> <a name="ocspUnknownResponseStatusAllowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspUnknownResponseStatusAllowed"></a>

```typescript
public readonly ocspUnknownResponseStatusAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_unknown_response_status_allowed IdentityDomainsSetting#ocsp_unknown_response_status_allowed}.

---

### IdentityDomainsSettingCloudGateCorsSettings <a name="IdentityDomainsSettingCloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingCloudGateCorsSettings: identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowedOrigins">cloudGateCorsAllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allowed_origins IdentityDomainsSetting#cloud_gate_cors_allowed_origins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowNullOrigin">cloudGateCorsAllowNullOrigin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allow_null_origin IdentityDomainsSetting#cloud_gate_cors_allow_null_origin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsEnabled">cloudGateCorsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_enabled IdentityDomainsSetting#cloud_gate_cors_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsExposedHeaders">cloudGateCorsExposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_exposed_headers IdentityDomainsSetting#cloud_gate_cors_exposed_headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsMaxAge">cloudGateCorsMaxAge</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_max_age IdentityDomainsSetting#cloud_gate_cors_max_age}. |

---

##### `cloudGateCorsAllowedOrigins`<sup>Optional</sup> <a name="cloudGateCorsAllowedOrigins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowedOrigins"></a>

```typescript
public readonly cloudGateCorsAllowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allowed_origins IdentityDomainsSetting#cloud_gate_cors_allowed_origins}.

---

##### `cloudGateCorsAllowNullOrigin`<sup>Optional</sup> <a name="cloudGateCorsAllowNullOrigin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowNullOrigin"></a>

```typescript
public readonly cloudGateCorsAllowNullOrigin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allow_null_origin IdentityDomainsSetting#cloud_gate_cors_allow_null_origin}.

---

##### `cloudGateCorsEnabled`<sup>Optional</sup> <a name="cloudGateCorsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsEnabled"></a>

```typescript
public readonly cloudGateCorsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_enabled IdentityDomainsSetting#cloud_gate_cors_enabled}.

---

##### `cloudGateCorsExposedHeaders`<sup>Optional</sup> <a name="cloudGateCorsExposedHeaders" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsExposedHeaders"></a>

```typescript
public readonly cloudGateCorsExposedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_exposed_headers IdentityDomainsSetting#cloud_gate_cors_exposed_headers}.

---

##### `cloudGateCorsMaxAge`<sup>Optional</sup> <a name="cloudGateCorsMaxAge" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsMaxAge"></a>

```typescript
public readonly cloudGateCorsMaxAge: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_max_age IdentityDomainsSetting#cloud_gate_cors_max_age}.

---

### IdentityDomainsSettingCompanyNames <a name="IdentityDomainsSettingCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingCompanyNames: identityDomainsSetting.IdentityDomainsSettingCompanyNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingConfig <a name="IdentityDomainsSettingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingConfig: identityDomainsSetting.IdentityDomainsSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.csrAccess">csrAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#csr_access IdentityDomainsSetting#csr_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#idcs_endpoint IdentityDomainsSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.schemas">schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#schemas IdentityDomainsSetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.settingId">settingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#setting_id IdentityDomainsSetting#setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.accountAlwaysTrustScope">accountAlwaysTrustScope</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#account_always_trust_scope IdentityDomainsSetting#account_always_trust_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedDomains">allowedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_domains IdentityDomainsSetting#allowed_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedForgotPasswordFlowReturnUrls">allowedForgotPasswordFlowReturnUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_forgot_password_flow_return_urls IdentityDomainsSetting#allowed_forgot_password_flow_return_urls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedNotificationRedirectUrls">allowedNotificationRedirectUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_notification_redirect_urls IdentityDomainsSetting#allowed_notification_redirect_urls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attributes IdentityDomainsSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attribute_sets IdentityDomainsSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.auditEventRetentionPeriod">auditEventRetentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#audit_event_retention_period IdentityDomainsSetting#audit_event_retention_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#authorization IdentityDomainsSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.certificateValidation">certificateValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | certificate_validation block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudGateCorsSettings">cloudGateCorsSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | cloud_gate_cors_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationCustomUrl">cloudMigrationCustomUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_custom_url IdentityDomainsSetting#cloud_migration_custom_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationUrlEnabled">cloudMigrationUrlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_url_enabled IdentityDomainsSetting#cloud_migration_url_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.companyNames">companyNames</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>[]</code> | company_names block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.contactEmails">contactEmails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#contact_emails IdentityDomainsSetting#contact_emails}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customBranding">customBranding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_branding IdentityDomainsSetting#custom_branding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customCssLocation">customCssLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_css_location IdentityDomainsSetting#custom_css_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customHtmlLocation">customHtmlLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_html_location IdentityDomainsSetting#custom_html_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customTranslation">customTranslation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_translation IdentityDomainsSetting#custom_translation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.defaultTrustScope">defaultTrustScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#default_trust_scope IdentityDomainsSetting#default_trust_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticLevel">diagnosticLevel</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_level IdentityDomainsSetting#diagnostic_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticRecordForSearchIdentifiesReturnedResources">diagnosticRecordForSearchIdentifiesReturnedResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_record_for_search_identifies_returned_resources IdentityDomainsSetting#diagnostic_record_for_search_identifies_returned_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.enableTermsOfUse">enableTermsOfUse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#enable_terms_of_use IdentityDomainsSetting#enable_terms_of_use}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#external_id IdentityDomainsSetting#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.iamUpstSessionExpiry">iamUpstSessionExpiry</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#iam_upst_session_expiry IdentityDomainsSetting#iam_upst_session_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#id IdentityDomainsSetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.images">images</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>[]</code> | images block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.isHostedPage">isHostedPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#is_hosted_page IdentityDomainsSetting#is_hosted_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#issuer IdentityDomainsSetting#issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.loginTexts">loginTexts</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>[]</code> | login_texts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppCmvaToReturn">maxNoOfAppCmvaToReturn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_cmva_to_return IdentityDomainsSetting#max_no_of_app_cmva_to_return}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppRoleMembersToReturn">maxNoOfAppRoleMembersToReturn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_role_members_to_return IdentityDomainsSetting#max_no_of_app_role_members_to_return}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocid IdentityDomainsSetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#preferred_language IdentityDomainsSetting#preferred_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.prevIssuer">prevIssuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#prev_issuer IdentityDomainsSetting#prev_issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.privacyPolicyUrl">privacyPolicyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#privacy_policy_url IdentityDomainsSetting#privacy_policy_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.purgeConfigs">purgeConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>[]</code> | purge_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthFactor">reAuthFactor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_factor IdentityDomainsSetting#re_auth_factor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthWhenChangingMyAuthenticationFactors">reAuthWhenChangingMyAuthenticationFactors</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_when_changing_my_authentication_factors IdentityDomainsSetting#re_auth_when_changing_my_authentication_factors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_type_schema_version IdentityDomainsSetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.serviceAdminCannotListOtherUsers">serviceAdminCannotListOtherUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#service_admin_cannot_list_other_users IdentityDomainsSetting#service_admin_cannot_list_other_users}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.signingCertPublicAccess">signingCertPublicAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#signing_cert_public_access IdentityDomainsSetting#signing_cert_public_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.subMappingAttr">subMappingAttr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#sub_mapping_attr IdentityDomainsSetting#sub_mapping_attr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>[]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tenantCustomClaims">tenantCustomClaims</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>[]</code> | tenant_custom_claims block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.termsOfUseUrl">termsOfUseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#terms_of_use_url IdentityDomainsSetting#terms_of_use_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timezone IdentityDomainsSetting#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `csrAccess`<sup>Required</sup> <a name="csrAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.csrAccess"></a>

```typescript
public readonly csrAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#csr_access IdentityDomainsSetting#csr_access}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#idcs_endpoint IdentityDomainsSetting#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#schemas IdentityDomainsSetting#schemas}.

---

##### `settingId`<sup>Required</sup> <a name="settingId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.settingId"></a>

```typescript
public readonly settingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#setting_id IdentityDomainsSetting#setting_id}.

---

##### `accountAlwaysTrustScope`<sup>Optional</sup> <a name="accountAlwaysTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.accountAlwaysTrustScope"></a>

```typescript
public readonly accountAlwaysTrustScope: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#account_always_trust_scope IdentityDomainsSetting#account_always_trust_scope}.

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_domains IdentityDomainsSetting#allowed_domains}.

---

##### `allowedForgotPasswordFlowReturnUrls`<sup>Optional</sup> <a name="allowedForgotPasswordFlowReturnUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedForgotPasswordFlowReturnUrls"></a>

```typescript
public readonly allowedForgotPasswordFlowReturnUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_forgot_password_flow_return_urls IdentityDomainsSetting#allowed_forgot_password_flow_return_urls}.

---

##### `allowedNotificationRedirectUrls`<sup>Optional</sup> <a name="allowedNotificationRedirectUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedNotificationRedirectUrls"></a>

```typescript
public readonly allowedNotificationRedirectUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_notification_redirect_urls IdentityDomainsSetting#allowed_notification_redirect_urls}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attributes IdentityDomainsSetting#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attribute_sets IdentityDomainsSetting#attribute_sets}.

---

##### `auditEventRetentionPeriod`<sup>Optional</sup> <a name="auditEventRetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.auditEventRetentionPeriod"></a>

```typescript
public readonly auditEventRetentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#audit_event_retention_period IdentityDomainsSetting#audit_event_retention_period}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#authorization IdentityDomainsSetting#authorization}.

---

##### `certificateValidation`<sup>Optional</sup> <a name="certificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.certificateValidation"></a>

```typescript
public readonly certificateValidation: IdentityDomainsSettingCertificateValidation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

certificate_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#certificate_validation IdentityDomainsSetting#certificate_validation}

---

##### `cloudGateCorsSettings`<sup>Optional</sup> <a name="cloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudGateCorsSettings"></a>

```typescript
public readonly cloudGateCorsSettings: IdentityDomainsSettingCloudGateCorsSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

cloud_gate_cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_settings IdentityDomainsSetting#cloud_gate_cors_settings}

---

##### `cloudMigrationCustomUrl`<sup>Optional</sup> <a name="cloudMigrationCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationCustomUrl"></a>

```typescript
public readonly cloudMigrationCustomUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_custom_url IdentityDomainsSetting#cloud_migration_custom_url}.

---

##### `cloudMigrationUrlEnabled`<sup>Optional</sup> <a name="cloudMigrationUrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationUrlEnabled"></a>

```typescript
public readonly cloudMigrationUrlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_url_enabled IdentityDomainsSetting#cloud_migration_url_enabled}.

---

##### `companyNames`<sup>Optional</sup> <a name="companyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.companyNames"></a>

```typescript
public readonly companyNames: IResolvable | IdentityDomainsSettingCompanyNames[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>[]

company_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#company_names IdentityDomainsSetting#company_names}

---

##### `contactEmails`<sup>Optional</sup> <a name="contactEmails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.contactEmails"></a>

```typescript
public readonly contactEmails: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#contact_emails IdentityDomainsSetting#contact_emails}.

---

##### `customBranding`<sup>Optional</sup> <a name="customBranding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customBranding"></a>

```typescript
public readonly customBranding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_branding IdentityDomainsSetting#custom_branding}.

---

##### `customCssLocation`<sup>Optional</sup> <a name="customCssLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customCssLocation"></a>

```typescript
public readonly customCssLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_css_location IdentityDomainsSetting#custom_css_location}.

---

##### `customHtmlLocation`<sup>Optional</sup> <a name="customHtmlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customHtmlLocation"></a>

```typescript
public readonly customHtmlLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_html_location IdentityDomainsSetting#custom_html_location}.

---

##### `customTranslation`<sup>Optional</sup> <a name="customTranslation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customTranslation"></a>

```typescript
public readonly customTranslation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_translation IdentityDomainsSetting#custom_translation}.

---

##### `defaultTrustScope`<sup>Optional</sup> <a name="defaultTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.defaultTrustScope"></a>

```typescript
public readonly defaultTrustScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#default_trust_scope IdentityDomainsSetting#default_trust_scope}.

---

##### `diagnosticLevel`<sup>Optional</sup> <a name="diagnosticLevel" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticLevel"></a>

```typescript
public readonly diagnosticLevel: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_level IdentityDomainsSetting#diagnostic_level}.

---

##### `diagnosticRecordForSearchIdentifiesReturnedResources`<sup>Optional</sup> <a name="diagnosticRecordForSearchIdentifiesReturnedResources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticRecordForSearchIdentifiesReturnedResources"></a>

```typescript
public readonly diagnosticRecordForSearchIdentifiesReturnedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_record_for_search_identifies_returned_resources IdentityDomainsSetting#diagnostic_record_for_search_identifies_returned_resources}.

---

##### `enableTermsOfUse`<sup>Optional</sup> <a name="enableTermsOfUse" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.enableTermsOfUse"></a>

```typescript
public readonly enableTermsOfUse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#enable_terms_of_use IdentityDomainsSetting#enable_terms_of_use}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#external_id IdentityDomainsSetting#external_id}.

---

##### `iamUpstSessionExpiry`<sup>Optional</sup> <a name="iamUpstSessionExpiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.iamUpstSessionExpiry"></a>

```typescript
public readonly iamUpstSessionExpiry: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#iam_upst_session_expiry IdentityDomainsSetting#iam_upst_session_expiry}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#id IdentityDomainsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `images`<sup>Optional</sup> <a name="images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.images"></a>

```typescript
public readonly images: IResolvable | IdentityDomainsSettingImages[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>[]

images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#images IdentityDomainsSetting#images}

---

##### `isHostedPage`<sup>Optional</sup> <a name="isHostedPage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.isHostedPage"></a>

```typescript
public readonly isHostedPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#is_hosted_page IdentityDomainsSetting#is_hosted_page}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#issuer IdentityDomainsSetting#issuer}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `loginTexts`<sup>Optional</sup> <a name="loginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.loginTexts"></a>

```typescript
public readonly loginTexts: IResolvable | IdentityDomainsSettingLoginTexts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>[]

login_texts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#login_texts IdentityDomainsSetting#login_texts}

---

##### `maxNoOfAppCmvaToReturn`<sup>Optional</sup> <a name="maxNoOfAppCmvaToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppCmvaToReturn"></a>

```typescript
public readonly maxNoOfAppCmvaToReturn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_cmva_to_return IdentityDomainsSetting#max_no_of_app_cmva_to_return}.

---

##### `maxNoOfAppRoleMembersToReturn`<sup>Optional</sup> <a name="maxNoOfAppRoleMembersToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppRoleMembersToReturn"></a>

```typescript
public readonly maxNoOfAppRoleMembersToReturn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_role_members_to_return IdentityDomainsSetting#max_no_of_app_role_members_to_return}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocid IdentityDomainsSetting#ocid}.

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#preferred_language IdentityDomainsSetting#preferred_language}.

---

##### `prevIssuer`<sup>Optional</sup> <a name="prevIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.prevIssuer"></a>

```typescript
public readonly prevIssuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#prev_issuer IdentityDomainsSetting#prev_issuer}.

---

##### `privacyPolicyUrl`<sup>Optional</sup> <a name="privacyPolicyUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.privacyPolicyUrl"></a>

```typescript
public readonly privacyPolicyUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#privacy_policy_url IdentityDomainsSetting#privacy_policy_url}.

---

##### `purgeConfigs`<sup>Optional</sup> <a name="purgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.purgeConfigs"></a>

```typescript
public readonly purgeConfigs: IResolvable | IdentityDomainsSettingPurgeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>[]

purge_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#purge_configs IdentityDomainsSetting#purge_configs}

---

##### `reAuthFactor`<sup>Optional</sup> <a name="reAuthFactor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthFactor"></a>

```typescript
public readonly reAuthFactor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_factor IdentityDomainsSetting#re_auth_factor}.

---

##### `reAuthWhenChangingMyAuthenticationFactors`<sup>Optional</sup> <a name="reAuthWhenChangingMyAuthenticationFactors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthWhenChangingMyAuthenticationFactors"></a>

```typescript
public readonly reAuthWhenChangingMyAuthenticationFactors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_when_changing_my_authentication_factors IdentityDomainsSetting#re_auth_when_changing_my_authentication_factors}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_type_schema_version IdentityDomainsSetting#resource_type_schema_version}.

---

##### `serviceAdminCannotListOtherUsers`<sup>Optional</sup> <a name="serviceAdminCannotListOtherUsers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.serviceAdminCannotListOtherUsers"></a>

```typescript
public readonly serviceAdminCannotListOtherUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#service_admin_cannot_list_other_users IdentityDomainsSetting#service_admin_cannot_list_other_users}.

---

##### `signingCertPublicAccess`<sup>Optional</sup> <a name="signingCertPublicAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.signingCertPublicAccess"></a>

```typescript
public readonly signingCertPublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#signing_cert_public_access IdentityDomainsSetting#signing_cert_public_access}.

---

##### `subMappingAttr`<sup>Optional</sup> <a name="subMappingAttr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.subMappingAttr"></a>

```typescript
public readonly subMappingAttr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#sub_mapping_attr IdentityDomainsSetting#sub_mapping_attr}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IdentityDomainsSettingTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#tags IdentityDomainsSetting#tags}

---

##### `tenantCustomClaims`<sup>Optional</sup> <a name="tenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tenantCustomClaims"></a>

```typescript
public readonly tenantCustomClaims: IResolvable | IdentityDomainsSettingTenantCustomClaims[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>[]

tenant_custom_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#tenant_custom_claims IdentityDomainsSetting#tenant_custom_claims}

---

##### `termsOfUseUrl`<sup>Optional</sup> <a name="termsOfUseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.termsOfUseUrl"></a>

```typescript
public readonly termsOfUseUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#terms_of_use_url IdentityDomainsSetting#terms_of_use_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsSettingTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timeouts IdentityDomainsSetting#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timezone IdentityDomainsSetting#timezone}.

---

### IdentityDomainsSettingDefaultCompanyNames <a name="IdentityDomainsSettingDefaultCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingDefaultCompanyNames: identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames = { ... }
```


### IdentityDomainsSettingDefaultImages <a name="IdentityDomainsSettingDefaultImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingDefaultImages: identityDomainsSetting.IdentityDomainsSettingDefaultImages = { ... }
```


### IdentityDomainsSettingDefaultLoginTexts <a name="IdentityDomainsSettingDefaultLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingDefaultLoginTexts: identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts = { ... }
```


### IdentityDomainsSettingIdcsCreatedBy <a name="IdentityDomainsSettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingIdcsCreatedBy: identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy = { ... }
```


### IdentityDomainsSettingIdcsLastModifiedBy <a name="IdentityDomainsSettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingIdcsLastModifiedBy: identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy = { ... }
```


### IdentityDomainsSettingImages <a name="IdentityDomainsSettingImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingImages: identityDomainsSetting.IdentityDomainsSettingImages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#type IdentityDomainsSetting#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.display">display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#display IdentityDomainsSetting#display}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#type IdentityDomainsSetting#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

##### `display`<sup>Optional</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#display IdentityDomainsSetting#display}.

---

### IdentityDomainsSettingLoginTexts <a name="IdentityDomainsSettingLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingLoginTexts: identityDomainsSetting.IdentityDomainsSettingLoginTexts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingMeta <a name="IdentityDomainsSettingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingMeta: identityDomainsSetting.IdentityDomainsSettingMeta = { ... }
```


### IdentityDomainsSettingPurgeConfigs <a name="IdentityDomainsSettingPurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingPurgeConfigs: identityDomainsSetting.IdentityDomainsSettingPurgeConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.resourceName">resourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_name IdentityDomainsSetting#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#retention_period IdentityDomainsSetting#retention_period}. |

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_name IdentityDomainsSetting#resource_name}.

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#retention_period IdentityDomainsSetting#retention_period}.

---

### IdentityDomainsSettingTags <a name="IdentityDomainsSettingTags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingTags: identityDomainsSetting.IdentityDomainsSettingTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#key IdentityDomainsSetting#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#key IdentityDomainsSetting#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingTenantCustomClaims <a name="IdentityDomainsSettingTenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingTenantCustomClaims: identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.allScopes">allScopes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#all_scopes IdentityDomainsSetting#all_scopes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.expression">expression</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#expression IdentityDomainsSetting#expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#mode IdentityDomainsSetting#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#name IdentityDomainsSetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.tokenType">tokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#token_type IdentityDomainsSetting#token_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#scopes IdentityDomainsSetting#scopes}. |

---

##### `allScopes`<sup>Required</sup> <a name="allScopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.allScopes"></a>

```typescript
public readonly allScopes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#all_scopes IdentityDomainsSetting#all_scopes}.

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.expression"></a>

```typescript
public readonly expression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#expression IdentityDomainsSetting#expression}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#mode IdentityDomainsSetting#mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#name IdentityDomainsSetting#name}.

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#token_type IdentityDomainsSetting#token_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#scopes IdentityDomainsSetting#scopes}.

---

### IdentityDomainsSettingTimeouts <a name="IdentityDomainsSettingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSettingTimeouts: identityDomainsSetting.IdentityDomainsSettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#create IdentityDomainsSetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#delete IdentityDomainsSetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#update IdentityDomainsSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#create IdentityDomainsSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#delete IdentityDomainsSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#update IdentityDomainsSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSettingCertificateValidationOutputReference <a name="IdentityDomainsSettingCertificateValidationOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlCheckOnOcspFailureEnabled">resetCrlCheckOnOcspFailureEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlEnabled">resetCrlEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlLocation">resetCrlLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlRefreshInterval">resetCrlRefreshInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspEnabled">resetOcspEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspResponderUrl">resetOcspResponderUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSettingsResponderUrlPreferred">resetOcspSettingsResponderUrlPreferred</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSigningCertificateAlias">resetOcspSigningCertificateAlias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspTimeoutDuration">resetOcspTimeoutDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspUnknownResponseStatusAllowed">resetOcspUnknownResponseStatusAllowed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrlCheckOnOcspFailureEnabled` <a name="resetCrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlCheckOnOcspFailureEnabled"></a>

```typescript
public resetCrlCheckOnOcspFailureEnabled(): void
```

##### `resetCrlEnabled` <a name="resetCrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlEnabled"></a>

```typescript
public resetCrlEnabled(): void
```

##### `resetCrlLocation` <a name="resetCrlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlLocation"></a>

```typescript
public resetCrlLocation(): void
```

##### `resetCrlRefreshInterval` <a name="resetCrlRefreshInterval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlRefreshInterval"></a>

```typescript
public resetCrlRefreshInterval(): void
```

##### `resetOcspEnabled` <a name="resetOcspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspEnabled"></a>

```typescript
public resetOcspEnabled(): void
```

##### `resetOcspResponderUrl` <a name="resetOcspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspResponderUrl"></a>

```typescript
public resetOcspResponderUrl(): void
```

##### `resetOcspSettingsResponderUrlPreferred` <a name="resetOcspSettingsResponderUrlPreferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSettingsResponderUrlPreferred"></a>

```typescript
public resetOcspSettingsResponderUrlPreferred(): void
```

##### `resetOcspSigningCertificateAlias` <a name="resetOcspSigningCertificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSigningCertificateAlias"></a>

```typescript
public resetOcspSigningCertificateAlias(): void
```

##### `resetOcspTimeoutDuration` <a name="resetOcspTimeoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspTimeoutDuration"></a>

```typescript
public resetOcspTimeoutDuration(): void
```

##### `resetOcspUnknownResponseStatusAllowed` <a name="resetOcspUnknownResponseStatusAllowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspUnknownResponseStatusAllowed"></a>

```typescript
public resetOcspUnknownResponseStatusAllowed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabledInput">crlCheckOnOcspFailureEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabledInput">crlEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocationInput">crlLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshIntervalInput">crlRefreshIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabledInput">ocspEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrlInput">ocspResponderUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferredInput">ocspSettingsResponderUrlPreferredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAliasInput">ocspSigningCertificateAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDurationInput">ocspTimeoutDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowedInput">ocspUnknownResponseStatusAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabled">crlCheckOnOcspFailureEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabled">crlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocation">crlLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshInterval">crlRefreshInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabled">ocspEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrl">ocspResponderUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferred">ocspSettingsResponderUrlPreferred</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAlias">ocspSigningCertificateAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDuration">ocspTimeoutDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowed">ocspUnknownResponseStatusAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crlCheckOnOcspFailureEnabledInput`<sup>Optional</sup> <a name="crlCheckOnOcspFailureEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabledInput"></a>

```typescript
public readonly crlCheckOnOcspFailureEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crlEnabledInput`<sup>Optional</sup> <a name="crlEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabledInput"></a>

```typescript
public readonly crlEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crlLocationInput`<sup>Optional</sup> <a name="crlLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocationInput"></a>

```typescript
public readonly crlLocationInput: string;
```

- *Type:* string

---

##### `crlRefreshIntervalInput`<sup>Optional</sup> <a name="crlRefreshIntervalInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshIntervalInput"></a>

```typescript
public readonly crlRefreshIntervalInput: number;
```

- *Type:* number

---

##### `ocspEnabledInput`<sup>Optional</sup> <a name="ocspEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabledInput"></a>

```typescript
public readonly ocspEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ocspResponderUrlInput`<sup>Optional</sup> <a name="ocspResponderUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrlInput"></a>

```typescript
public readonly ocspResponderUrlInput: string;
```

- *Type:* string

---

##### `ocspSettingsResponderUrlPreferredInput`<sup>Optional</sup> <a name="ocspSettingsResponderUrlPreferredInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferredInput"></a>

```typescript
public readonly ocspSettingsResponderUrlPreferredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ocspSigningCertificateAliasInput`<sup>Optional</sup> <a name="ocspSigningCertificateAliasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAliasInput"></a>

```typescript
public readonly ocspSigningCertificateAliasInput: string;
```

- *Type:* string

---

##### `ocspTimeoutDurationInput`<sup>Optional</sup> <a name="ocspTimeoutDurationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDurationInput"></a>

```typescript
public readonly ocspTimeoutDurationInput: number;
```

- *Type:* number

---

##### `ocspUnknownResponseStatusAllowedInput`<sup>Optional</sup> <a name="ocspUnknownResponseStatusAllowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowedInput"></a>

```typescript
public readonly ocspUnknownResponseStatusAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crlCheckOnOcspFailureEnabled`<sup>Required</sup> <a name="crlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```typescript
public readonly crlCheckOnOcspFailureEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crlEnabled`<sup>Required</sup> <a name="crlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabled"></a>

```typescript
public readonly crlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crlLocation`<sup>Required</sup> <a name="crlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocation"></a>

```typescript
public readonly crlLocation: string;
```

- *Type:* string

---

##### `crlRefreshInterval`<sup>Required</sup> <a name="crlRefreshInterval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshInterval"></a>

```typescript
public readonly crlRefreshInterval: number;
```

- *Type:* number

---

##### `ocspEnabled`<sup>Required</sup> <a name="ocspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabled"></a>

```typescript
public readonly ocspEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ocspResponderUrl`<sup>Required</sup> <a name="ocspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrl"></a>

```typescript
public readonly ocspResponderUrl: string;
```

- *Type:* string

---

##### `ocspSettingsResponderUrlPreferred`<sup>Required</sup> <a name="ocspSettingsResponderUrlPreferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferred"></a>

```typescript
public readonly ocspSettingsResponderUrlPreferred: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ocspSigningCertificateAlias`<sup>Required</sup> <a name="ocspSigningCertificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAlias"></a>

```typescript
public readonly ocspSigningCertificateAlias: string;
```

- *Type:* string

---

##### `ocspTimeoutDuration`<sup>Required</sup> <a name="ocspTimeoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDuration"></a>

```typescript
public readonly ocspTimeoutDuration: number;
```

- *Type:* number

---

##### `ocspUnknownResponseStatusAllowed`<sup>Required</sup> <a name="ocspUnknownResponseStatusAllowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowed"></a>

```typescript
public readonly ocspUnknownResponseStatusAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSettingCertificateValidation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

---


### IdentityDomainsSettingCloudGateCorsSettingsOutputReference <a name="IdentityDomainsSettingCloudGateCorsSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowedOrigins">resetCloudGateCorsAllowedOrigins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowNullOrigin">resetCloudGateCorsAllowNullOrigin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsEnabled">resetCloudGateCorsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsExposedHeaders">resetCloudGateCorsExposedHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsMaxAge">resetCloudGateCorsMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudGateCorsAllowedOrigins` <a name="resetCloudGateCorsAllowedOrigins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowedOrigins"></a>

```typescript
public resetCloudGateCorsAllowedOrigins(): void
```

##### `resetCloudGateCorsAllowNullOrigin` <a name="resetCloudGateCorsAllowNullOrigin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowNullOrigin"></a>

```typescript
public resetCloudGateCorsAllowNullOrigin(): void
```

##### `resetCloudGateCorsEnabled` <a name="resetCloudGateCorsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsEnabled"></a>

```typescript
public resetCloudGateCorsEnabled(): void
```

##### `resetCloudGateCorsExposedHeaders` <a name="resetCloudGateCorsExposedHeaders" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsExposedHeaders"></a>

```typescript
public resetCloudGateCorsExposedHeaders(): void
```

##### `resetCloudGateCorsMaxAge` <a name="resetCloudGateCorsMaxAge" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsMaxAge"></a>

```typescript
public resetCloudGateCorsMaxAge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOriginsInput">cloudGateCorsAllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOriginInput">cloudGateCorsAllowNullOriginInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabledInput">cloudGateCorsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeadersInput">cloudGateCorsExposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAgeInput">cloudGateCorsMaxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOrigins">cloudGateCorsAllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOrigin">cloudGateCorsAllowNullOrigin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabled">cloudGateCorsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeaders">cloudGateCorsExposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAge">cloudGateCorsMaxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudGateCorsAllowedOriginsInput`<sup>Optional</sup> <a name="cloudGateCorsAllowedOriginsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOriginsInput"></a>

```typescript
public readonly cloudGateCorsAllowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `cloudGateCorsAllowNullOriginInput`<sup>Optional</sup> <a name="cloudGateCorsAllowNullOriginInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOriginInput"></a>

```typescript
public readonly cloudGateCorsAllowNullOriginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudGateCorsEnabledInput`<sup>Optional</sup> <a name="cloudGateCorsEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabledInput"></a>

```typescript
public readonly cloudGateCorsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudGateCorsExposedHeadersInput`<sup>Optional</sup> <a name="cloudGateCorsExposedHeadersInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeadersInput"></a>

```typescript
public readonly cloudGateCorsExposedHeadersInput: string[];
```

- *Type:* string[]

---

##### `cloudGateCorsMaxAgeInput`<sup>Optional</sup> <a name="cloudGateCorsMaxAgeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAgeInput"></a>

```typescript
public readonly cloudGateCorsMaxAgeInput: number;
```

- *Type:* number

---

##### `cloudGateCorsAllowedOrigins`<sup>Required</sup> <a name="cloudGateCorsAllowedOrigins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOrigins"></a>

```typescript
public readonly cloudGateCorsAllowedOrigins: string[];
```

- *Type:* string[]

---

##### `cloudGateCorsAllowNullOrigin`<sup>Required</sup> <a name="cloudGateCorsAllowNullOrigin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOrigin"></a>

```typescript
public readonly cloudGateCorsAllowNullOrigin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudGateCorsEnabled`<sup>Required</sup> <a name="cloudGateCorsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabled"></a>

```typescript
public readonly cloudGateCorsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudGateCorsExposedHeaders`<sup>Required</sup> <a name="cloudGateCorsExposedHeaders" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeaders"></a>

```typescript
public readonly cloudGateCorsExposedHeaders: string[];
```

- *Type:* string[]

---

##### `cloudGateCorsMaxAge`<sup>Required</sup> <a name="cloudGateCorsMaxAge" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAge"></a>

```typescript
public readonly cloudGateCorsMaxAge: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSettingCloudGateCorsSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

---


### IdentityDomainsSettingCompanyNamesList <a name="IdentityDomainsSettingCompanyNamesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingCompanyNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingCompanyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingCompanyNames[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>[]

---


### IdentityDomainsSettingCompanyNamesOutputReference <a name="IdentityDomainsSettingCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingCompanyNames;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames">IdentityDomainsSettingCompanyNames</a>

---


### IdentityDomainsSettingDefaultCompanyNamesList <a name="IdentityDomainsSettingDefaultCompanyNamesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingDefaultCompanyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSettingDefaultCompanyNamesOutputReference <a name="IdentityDomainsSettingDefaultCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames">IdentityDomainsSettingDefaultCompanyNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSettingDefaultCompanyNames;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames">IdentityDomainsSettingDefaultCompanyNames</a>

---


### IdentityDomainsSettingDefaultImagesList <a name="IdentityDomainsSettingDefaultImagesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingDefaultImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingDefaultImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSettingDefaultImagesOutputReference <a name="IdentityDomainsSettingDefaultImagesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages">IdentityDomainsSettingDefaultImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSettingDefaultImages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages">IdentityDomainsSettingDefaultImages</a>

---


### IdentityDomainsSettingDefaultLoginTextsList <a name="IdentityDomainsSettingDefaultLoginTextsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingDefaultLoginTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSettingDefaultLoginTextsOutputReference <a name="IdentityDomainsSettingDefaultLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts">IdentityDomainsSettingDefaultLoginTexts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSettingDefaultLoginTexts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts">IdentityDomainsSettingDefaultLoginTexts</a>

---


### IdentityDomainsSettingIdcsCreatedByList <a name="IdentityDomainsSettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSettingIdcsCreatedByOutputReference <a name="IdentityDomainsSettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy">IdentityDomainsSettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSettingIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy">IdentityDomainsSettingIdcsCreatedBy</a>

---


### IdentityDomainsSettingIdcsLastModifiedByList <a name="IdentityDomainsSettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSettingIdcsLastModifiedByOutputReference <a name="IdentityDomainsSettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy">IdentityDomainsSettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSettingIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy">IdentityDomainsSettingIdcsLastModifiedBy</a>

---


### IdentityDomainsSettingImagesList <a name="IdentityDomainsSettingImagesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingImages[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>[]

---


### IdentityDomainsSettingImagesOutputReference <a name="IdentityDomainsSettingImagesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplay` <a name="resetDisplay" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingImages;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages">IdentityDomainsSettingImages</a>

---


### IdentityDomainsSettingLoginTextsList <a name="IdentityDomainsSettingLoginTextsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingLoginTextsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingLoginTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingLoginTexts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>[]

---


### IdentityDomainsSettingLoginTextsOutputReference <a name="IdentityDomainsSettingLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingLoginTexts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts">IdentityDomainsSettingLoginTexts</a>

---


### IdentityDomainsSettingMetaList <a name="IdentityDomainsSettingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSettingMetaOutputReference <a name="IdentityDomainsSettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta">IdentityDomainsSettingMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSettingMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta">IdentityDomainsSettingMeta</a>

---


### IdentityDomainsSettingPurgeConfigsList <a name="IdentityDomainsSettingPurgeConfigsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingPurgeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingPurgeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>[]

---


### IdentityDomainsSettingPurgeConfigsOutputReference <a name="IdentityDomainsSettingPurgeConfigsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: number;
```

- *Type:* number

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingPurgeConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs">IdentityDomainsSettingPurgeConfigs</a>

---


### IdentityDomainsSettingTagsList <a name="IdentityDomainsSettingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>[]

---


### IdentityDomainsSettingTagsOutputReference <a name="IdentityDomainsSettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags">IdentityDomainsSettingTags</a>

---


### IdentityDomainsSettingTenantCustomClaimsList <a name="IdentityDomainsSettingTenantCustomClaimsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.get"></a>

```typescript
public get(index: number): IdentityDomainsSettingTenantCustomClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingTenantCustomClaims[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>[]

---


### IdentityDomainsSettingTenantCustomClaimsOutputReference <a name="IdentityDomainsSettingTenantCustomClaimsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopesInput">allScopesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expressionInput">expressionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopes">allScopes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expression">expression</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allScopesInput`<sup>Optional</sup> <a name="allScopesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopesInput"></a>

```typescript
public readonly allScopesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `allScopes`<sup>Required</sup> <a name="allScopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopes"></a>

```typescript
public readonly allScopes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expression"></a>

```typescript
public readonly expression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingTenantCustomClaims;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims">IdentityDomainsSettingTenantCustomClaims</a>

---


### IdentityDomainsSettingTimeoutsOutputReference <a name="IdentityDomainsSettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>

---



