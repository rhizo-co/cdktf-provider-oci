# `identityDomainsSetting` Submodule <a name="`identityDomainsSetting` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSetting <a name="IdentityDomainsSetting" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting oci_identity_domains_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSetting(Construct Scope, string Id, IdentityDomainsSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig">IdentityDomainsSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificateValidation` <a name="PutCertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation"></a>

```csharp
private void PutCertificateValidation(IdentityDomainsSettingCertificateValidation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCertificateValidation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

---

##### `PutCloudGateCorsSettings` <a name="PutCloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings"></a>

```csharp
private void PutCloudGateCorsSettings(IdentityDomainsSettingCloudGateCorsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCloudGateCorsSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

---

##### `PutCompanyNames` <a name="PutCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCompanyNames"></a>

```csharp
private void PutCompanyNames(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putCompanyNames.parameter.value"></a>

- *Type:* object

---

##### `PutImages` <a name="PutImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putImages"></a>

```csharp
private void PutImages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putImages.parameter.value"></a>

- *Type:* object

---

##### `PutLoginTexts` <a name="PutLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putLoginTexts"></a>

```csharp
private void PutLoginTexts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putLoginTexts.parameter.value"></a>

- *Type:* object

---

##### `PutPurgeConfigs` <a name="PutPurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putPurgeConfigs"></a>

```csharp
private void PutPurgeConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putPurgeConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutTenantCustomClaims` <a name="PutTenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTenantCustomClaims"></a>

```csharp
private void PutTenantCustomClaims(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTenantCustomClaims.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityDomainsSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>

---

##### `ResetAccountAlwaysTrustScope` <a name="ResetAccountAlwaysTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAccountAlwaysTrustScope"></a>

```csharp
private void ResetAccountAlwaysTrustScope()
```

##### `ResetAllowedDomains` <a name="ResetAllowedDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedDomains"></a>

```csharp
private void ResetAllowedDomains()
```

##### `ResetAllowedForgotPasswordFlowReturnUrls` <a name="ResetAllowedForgotPasswordFlowReturnUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedForgotPasswordFlowReturnUrls"></a>

```csharp
private void ResetAllowedForgotPasswordFlowReturnUrls()
```

##### `ResetAllowedNotificationRedirectUrls` <a name="ResetAllowedNotificationRedirectUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAllowedNotificationRedirectUrls"></a>

```csharp
private void ResetAllowedNotificationRedirectUrls()
```

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuditEventRetentionPeriod` <a name="ResetAuditEventRetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuditEventRetentionPeriod"></a>

```csharp
private void ResetAuditEventRetentionPeriod()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCertificateValidation` <a name="ResetCertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCertificateValidation"></a>

```csharp
private void ResetCertificateValidation()
```

##### `ResetCloudGateCorsSettings` <a name="ResetCloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudGateCorsSettings"></a>

```csharp
private void ResetCloudGateCorsSettings()
```

##### `ResetCloudMigrationCustomUrl` <a name="ResetCloudMigrationCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationCustomUrl"></a>

```csharp
private void ResetCloudMigrationCustomUrl()
```

##### `ResetCloudMigrationUrlEnabled` <a name="ResetCloudMigrationUrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCloudMigrationUrlEnabled"></a>

```csharp
private void ResetCloudMigrationUrlEnabled()
```

##### `ResetCompanyNames` <a name="ResetCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCompanyNames"></a>

```csharp
private void ResetCompanyNames()
```

##### `ResetContactEmails` <a name="ResetContactEmails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetContactEmails"></a>

```csharp
private void ResetContactEmails()
```

##### `ResetCustomBranding` <a name="ResetCustomBranding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomBranding"></a>

```csharp
private void ResetCustomBranding()
```

##### `ResetCustomCssLocation` <a name="ResetCustomCssLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomCssLocation"></a>

```csharp
private void ResetCustomCssLocation()
```

##### `ResetCustomHtmlLocation` <a name="ResetCustomHtmlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomHtmlLocation"></a>

```csharp
private void ResetCustomHtmlLocation()
```

##### `ResetCustomTranslation` <a name="ResetCustomTranslation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetCustomTranslation"></a>

```csharp
private void ResetCustomTranslation()
```

##### `ResetDefaultTrustScope` <a name="ResetDefaultTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDefaultTrustScope"></a>

```csharp
private void ResetDefaultTrustScope()
```

##### `ResetDiagnosticLevel` <a name="ResetDiagnosticLevel" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticLevel"></a>

```csharp
private void ResetDiagnosticLevel()
```

##### `ResetDiagnosticRecordForSearchIdentifiesReturnedResources` <a name="ResetDiagnosticRecordForSearchIdentifiesReturnedResources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetDiagnosticRecordForSearchIdentifiesReturnedResources"></a>

```csharp
private void ResetDiagnosticRecordForSearchIdentifiesReturnedResources()
```

##### `ResetEnableTermsOfUse` <a name="ResetEnableTermsOfUse" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetEnableTermsOfUse"></a>

```csharp
private void ResetEnableTermsOfUse()
```

##### `ResetExternalId` <a name="ResetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetIamUpstSessionExpiry` <a name="ResetIamUpstSessionExpiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIamUpstSessionExpiry"></a>

```csharp
private void ResetIamUpstSessionExpiry()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImages` <a name="ResetImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetImages"></a>

```csharp
private void ResetImages()
```

##### `ResetIsHostedPage` <a name="ResetIsHostedPage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIsHostedPage"></a>

```csharp
private void ResetIsHostedPage()
```

##### `ResetIssuer` <a name="ResetIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetLocale` <a name="ResetLocale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLocale"></a>

```csharp
private void ResetLocale()
```

##### `ResetLoginTexts` <a name="ResetLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetLoginTexts"></a>

```csharp
private void ResetLoginTexts()
```

##### `ResetMaxNoOfAppCmvaToReturn` <a name="ResetMaxNoOfAppCmvaToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppCmvaToReturn"></a>

```csharp
private void ResetMaxNoOfAppCmvaToReturn()
```

##### `ResetMaxNoOfAppRoleMembersToReturn` <a name="ResetMaxNoOfAppRoleMembersToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetMaxNoOfAppRoleMembersToReturn"></a>

```csharp
private void ResetMaxNoOfAppRoleMembersToReturn()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetOcid"></a>

```csharp
private void ResetOcid()
```

##### `ResetPreferredLanguage` <a name="ResetPreferredLanguage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPreferredLanguage"></a>

```csharp
private void ResetPreferredLanguage()
```

##### `ResetPrevIssuer` <a name="ResetPrevIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrevIssuer"></a>

```csharp
private void ResetPrevIssuer()
```

##### `ResetPrivacyPolicyUrl` <a name="ResetPrivacyPolicyUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPrivacyPolicyUrl"></a>

```csharp
private void ResetPrivacyPolicyUrl()
```

##### `ResetPurgeConfigs` <a name="ResetPurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetPurgeConfigs"></a>

```csharp
private void ResetPurgeConfigs()
```

##### `ResetReAuthFactor` <a name="ResetReAuthFactor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthFactor"></a>

```csharp
private void ResetReAuthFactor()
```

##### `ResetReAuthWhenChangingMyAuthenticationFactors` <a name="ResetReAuthWhenChangingMyAuthenticationFactors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetReAuthWhenChangingMyAuthenticationFactors"></a>

```csharp
private void ResetReAuthWhenChangingMyAuthenticationFactors()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetServiceAdminCannotListOtherUsers` <a name="ResetServiceAdminCannotListOtherUsers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetServiceAdminCannotListOtherUsers"></a>

```csharp
private void ResetServiceAdminCannotListOtherUsers()
```

##### `ResetSigningCertPublicAccess` <a name="ResetSigningCertPublicAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSigningCertPublicAccess"></a>

```csharp
private void ResetSigningCertPublicAccess()
```

##### `ResetSubMappingAttr` <a name="ResetSubMappingAttr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetSubMappingAttr"></a>

```csharp
private void ResetSubMappingAttr()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTenantCustomClaims` <a name="ResetTenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTenantCustomClaims"></a>

```csharp
private void ResetTenantCustomClaims()
```

##### `ResetTermsOfUseUrl` <a name="ResetTermsOfUseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTermsOfUseUrl"></a>

```csharp
private void ResetTermsOfUseUrl()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimezone` <a name="ResetTimezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.resetTimezone"></a>

```csharp
private void ResetTimezone()
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

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityDomainsSetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidation">CertificateValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference">IdentityDomainsSettingCertificateValidationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudAccountName">CloudAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettings">CloudGateCorsSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference">IdentityDomainsSettingCloudGateCorsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNames">CompanyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList">IdentityDomainsSettingCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultCompanyNames">DefaultCompanyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList">IdentityDomainsSettingDefaultCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultImages">DefaultImages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList">IdentityDomainsSettingDefaultImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultLoginTexts">DefaultLoginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList">IdentityDomainsSettingDefaultLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticTracingUpto">DiagnosticTracingUpto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList">IdentityDomainsSettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList">IdentityDomainsSettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.images">Images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList">IdentityDomainsSettingImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTexts">LoginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList">IdentityDomainsSettingLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList">IdentityDomainsSettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.migrationStatus">MigrationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.onPremisesProvisioning">OnPremisesProvisioning</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigs">PurgeConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList">IdentityDomainsSettingPurgeConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList">IdentityDomainsSettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaims">TenantCustomClaims</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList">IdentityDomainsSettingTenantCustomClaimsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference">IdentityDomainsSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScopeInput">AccountAlwaysTrustScopeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomainsInput">AllowedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrlsInput">AllowedForgotPasswordFlowReturnUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrlsInput">AllowedNotificationRedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriodInput">AuditEventRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidationInput">CertificateValidationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettingsInput">CloudGateCorsSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrlInput">CloudMigrationCustomUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabledInput">CloudMigrationUrlEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNamesInput">CompanyNamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmailsInput">ContactEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccessInput">CsrAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBrandingInput">CustomBrandingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocationInput">CustomCssLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocationInput">CustomHtmlLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslationInput">CustomTranslationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScopeInput">DefaultTrustScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevelInput">DiagnosticLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResourcesInput">DiagnosticRecordForSearchIdentifiesReturnedResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUseInput">EnableTermsOfUseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiryInput">IamUpstSessionExpiryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.imagesInput">ImagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPageInput">IsHostedPageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTextsInput">LoginTextsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturnInput">MaxNoOfAppCmvaToReturnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturnInput">MaxNoOfAppRoleMembersToReturnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguageInput">PreferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuerInput">PrevIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrlInput">PrivacyPolicyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigsInput">PurgeConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactorInput">ReAuthFactorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactorsInput">ReAuthWhenChangingMyAuthenticationFactorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemasInput">SchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsersInput">ServiceAdminCannotListOtherUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingIdInput">SettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccessInput">SigningCertPublicAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttrInput">SubMappingAttrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaimsInput">TenantCustomClaimsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrlInput">TermsOfUseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScope">AccountAlwaysTrustScope</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomains">AllowedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrls">AllowedForgotPasswordFlowReturnUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrls">AllowedNotificationRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriod">AuditEventRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrl">CloudMigrationCustomUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabled">CloudMigrationUrlEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmails">ContactEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccess">CsrAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBranding">CustomBranding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocation">CustomCssLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocation">CustomHtmlLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslation">CustomTranslation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScope">DefaultTrustScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevel">DiagnosticLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResources">DiagnosticRecordForSearchIdentifiesReturnedResources</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUse">EnableTermsOfUse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiry">IamUpstSessionExpiry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPage">IsHostedPage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturn">MaxNoOfAppCmvaToReturn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturn">MaxNoOfAppRoleMembersToReturn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuer">PrevIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrl">PrivacyPolicyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactor">ReAuthFactor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactors">ReAuthWhenChangingMyAuthenticationFactors</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsers">ServiceAdminCannotListOtherUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingId">SettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccess">SigningCertPublicAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttr">SubMappingAttr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrl">TermsOfUseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertificateValidation`<sup>Required</sup> <a name="CertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidation"></a>

```csharp
public IdentityDomainsSettingCertificateValidationOutputReference CertificateValidation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference">IdentityDomainsSettingCertificateValidationOutputReference</a>

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudAccountName"></a>

```csharp
public string CloudAccountName { get; }
```

- *Type:* string

---

##### `CloudGateCorsSettings`<sup>Required</sup> <a name="CloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettings"></a>

```csharp
public IdentityDomainsSettingCloudGateCorsSettingsOutputReference CloudGateCorsSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference">IdentityDomainsSettingCloudGateCorsSettingsOutputReference</a>

---

##### `CompanyNames`<sup>Required</sup> <a name="CompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNames"></a>

```csharp
public IdentityDomainsSettingCompanyNamesList CompanyNames { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList">IdentityDomainsSettingCompanyNamesList</a>

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DefaultCompanyNames`<sup>Required</sup> <a name="DefaultCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultCompanyNames"></a>

```csharp
public IdentityDomainsSettingDefaultCompanyNamesList DefaultCompanyNames { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList">IdentityDomainsSettingDefaultCompanyNamesList</a>

---

##### `DefaultImages`<sup>Required</sup> <a name="DefaultImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultImages"></a>

```csharp
public IdentityDomainsSettingDefaultImagesList DefaultImages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList">IdentityDomainsSettingDefaultImagesList</a>

---

##### `DefaultLoginTexts`<sup>Required</sup> <a name="DefaultLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultLoginTexts"></a>

```csharp
public IdentityDomainsSettingDefaultLoginTextsList DefaultLoginTexts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList">IdentityDomainsSettingDefaultLoginTextsList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DiagnosticTracingUpto`<sup>Required</sup> <a name="DiagnosticTracingUpto" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticTracingUpto"></a>

```csharp
public string DiagnosticTracingUpto { get; }
```

- *Type:* string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsCreatedBy"></a>

```csharp
public IdentityDomainsSettingIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList">IdentityDomainsSettingIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastModifiedBy"></a>

```csharp
public IdentityDomainsSettingIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList">IdentityDomainsSettingIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Images`<sup>Required</sup> <a name="Images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.images"></a>

```csharp
public IdentityDomainsSettingImagesList Images { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList">IdentityDomainsSettingImagesList</a>

---

##### `LoginTexts`<sup>Required</sup> <a name="LoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTexts"></a>

```csharp
public IdentityDomainsSettingLoginTextsList LoginTexts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList">IdentityDomainsSettingLoginTextsList</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.meta"></a>

```csharp
public IdentityDomainsSettingMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList">IdentityDomainsSettingMetaList</a>

---

##### `MigrationStatus`<sup>Required</sup> <a name="MigrationStatus" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.migrationStatus"></a>

```csharp
public string MigrationStatus { get; }
```

- *Type:* string

---

##### `OnPremisesProvisioning`<sup>Required</sup> <a name="OnPremisesProvisioning" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.onPremisesProvisioning"></a>

```csharp
public IResolvable OnPremisesProvisioning { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PurgeConfigs`<sup>Required</sup> <a name="PurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigs"></a>

```csharp
public IdentityDomainsSettingPurgeConfigsList PurgeConfigs { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList">IdentityDomainsSettingPurgeConfigsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tags"></a>

```csharp
public IdentityDomainsSettingTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList">IdentityDomainsSettingTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `TenantCustomClaims`<sup>Required</sup> <a name="TenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaims"></a>

```csharp
public IdentityDomainsSettingTenantCustomClaimsList TenantCustomClaims { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList">IdentityDomainsSettingTenantCustomClaimsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeouts"></a>

```csharp
public IdentityDomainsSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference">IdentityDomainsSettingTimeoutsOutputReference</a>

---

##### `AccountAlwaysTrustScopeInput`<sup>Optional</sup> <a name="AccountAlwaysTrustScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScopeInput"></a>

```csharp
public object AccountAlwaysTrustScopeInput { get; }
```

- *Type:* object

---

##### `AllowedDomainsInput`<sup>Optional</sup> <a name="AllowedDomainsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomainsInput"></a>

```csharp
public string[] AllowedDomainsInput { get; }
```

- *Type:* string[]

---

##### `AllowedForgotPasswordFlowReturnUrlsInput`<sup>Optional</sup> <a name="AllowedForgotPasswordFlowReturnUrlsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrlsInput"></a>

```csharp
public string[] AllowedForgotPasswordFlowReturnUrlsInput { get; }
```

- *Type:* string[]

---

##### `AllowedNotificationRedirectUrlsInput`<sup>Optional</sup> <a name="AllowedNotificationRedirectUrlsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrlsInput"></a>

```csharp
public string[] AllowedNotificationRedirectUrlsInput { get; }
```

- *Type:* string[]

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuditEventRetentionPeriodInput`<sup>Optional</sup> <a name="AuditEventRetentionPeriodInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriodInput"></a>

```csharp
public double AuditEventRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CertificateValidationInput`<sup>Optional</sup> <a name="CertificateValidationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.certificateValidationInput"></a>

```csharp
public IdentityDomainsSettingCertificateValidation CertificateValidationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

---

##### `CloudGateCorsSettingsInput`<sup>Optional</sup> <a name="CloudGateCorsSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudGateCorsSettingsInput"></a>

```csharp
public IdentityDomainsSettingCloudGateCorsSettings CloudGateCorsSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

---

##### `CloudMigrationCustomUrlInput`<sup>Optional</sup> <a name="CloudMigrationCustomUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrlInput"></a>

```csharp
public string CloudMigrationCustomUrlInput { get; }
```

- *Type:* string

---

##### `CloudMigrationUrlEnabledInput`<sup>Optional</sup> <a name="CloudMigrationUrlEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabledInput"></a>

```csharp
public object CloudMigrationUrlEnabledInput { get; }
```

- *Type:* object

---

##### `CompanyNamesInput`<sup>Optional</sup> <a name="CompanyNamesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.companyNamesInput"></a>

```csharp
public object CompanyNamesInput { get; }
```

- *Type:* object

---

##### `ContactEmailsInput`<sup>Optional</sup> <a name="ContactEmailsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmailsInput"></a>

```csharp
public string[] ContactEmailsInput { get; }
```

- *Type:* string[]

---

##### `CsrAccessInput`<sup>Optional</sup> <a name="CsrAccessInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccessInput"></a>

```csharp
public string CsrAccessInput { get; }
```

- *Type:* string

---

##### `CustomBrandingInput`<sup>Optional</sup> <a name="CustomBrandingInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBrandingInput"></a>

```csharp
public object CustomBrandingInput { get; }
```

- *Type:* object

---

##### `CustomCssLocationInput`<sup>Optional</sup> <a name="CustomCssLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocationInput"></a>

```csharp
public string CustomCssLocationInput { get; }
```

- *Type:* string

---

##### `CustomHtmlLocationInput`<sup>Optional</sup> <a name="CustomHtmlLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocationInput"></a>

```csharp
public string CustomHtmlLocationInput { get; }
```

- *Type:* string

---

##### `CustomTranslationInput`<sup>Optional</sup> <a name="CustomTranslationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslationInput"></a>

```csharp
public string CustomTranslationInput { get; }
```

- *Type:* string

---

##### `DefaultTrustScopeInput`<sup>Optional</sup> <a name="DefaultTrustScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScopeInput"></a>

```csharp
public string DefaultTrustScopeInput { get; }
```

- *Type:* string

---

##### `DiagnosticLevelInput`<sup>Optional</sup> <a name="DiagnosticLevelInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevelInput"></a>

```csharp
public double DiagnosticLevelInput { get; }
```

- *Type:* double

---

##### `DiagnosticRecordForSearchIdentifiesReturnedResourcesInput`<sup>Optional</sup> <a name="DiagnosticRecordForSearchIdentifiesReturnedResourcesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResourcesInput"></a>

```csharp
public object DiagnosticRecordForSearchIdentifiesReturnedResourcesInput { get; }
```

- *Type:* object

---

##### `EnableTermsOfUseInput`<sup>Optional</sup> <a name="EnableTermsOfUseInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUseInput"></a>

```csharp
public object EnableTermsOfUseInput { get; }
```

- *Type:* object

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `IamUpstSessionExpiryInput`<sup>Optional</sup> <a name="IamUpstSessionExpiryInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiryInput"></a>

```csharp
public double IamUpstSessionExpiryInput { get; }
```

- *Type:* double

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImagesInput`<sup>Optional</sup> <a name="ImagesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.imagesInput"></a>

```csharp
public object ImagesInput { get; }
```

- *Type:* object

---

##### `IsHostedPageInput`<sup>Optional</sup> <a name="IsHostedPageInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPageInput"></a>

```csharp
public object IsHostedPageInput { get; }
```

- *Type:* object

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `LoginTextsInput`<sup>Optional</sup> <a name="LoginTextsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.loginTextsInput"></a>

```csharp
public object LoginTextsInput { get; }
```

- *Type:* object

---

##### `MaxNoOfAppCmvaToReturnInput`<sup>Optional</sup> <a name="MaxNoOfAppCmvaToReturnInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturnInput"></a>

```csharp
public double MaxNoOfAppCmvaToReturnInput { get; }
```

- *Type:* double

---

##### `MaxNoOfAppRoleMembersToReturnInput`<sup>Optional</sup> <a name="MaxNoOfAppRoleMembersToReturnInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturnInput"></a>

```csharp
public double MaxNoOfAppRoleMembersToReturnInput { get; }
```

- *Type:* double

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `PreferredLanguageInput`<sup>Optional</sup> <a name="PreferredLanguageInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguageInput"></a>

```csharp
public string PreferredLanguageInput { get; }
```

- *Type:* string

---

##### `PrevIssuerInput`<sup>Optional</sup> <a name="PrevIssuerInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuerInput"></a>

```csharp
public string PrevIssuerInput { get; }
```

- *Type:* string

---

##### `PrivacyPolicyUrlInput`<sup>Optional</sup> <a name="PrivacyPolicyUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrlInput"></a>

```csharp
public string PrivacyPolicyUrlInput { get; }
```

- *Type:* string

---

##### `PurgeConfigsInput`<sup>Optional</sup> <a name="PurgeConfigsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.purgeConfigsInput"></a>

```csharp
public object PurgeConfigsInput { get; }
```

- *Type:* object

---

##### `ReAuthFactorInput`<sup>Optional</sup> <a name="ReAuthFactorInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactorInput"></a>

```csharp
public string[] ReAuthFactorInput { get; }
```

- *Type:* string[]

---

##### `ReAuthWhenChangingMyAuthenticationFactorsInput`<sup>Optional</sup> <a name="ReAuthWhenChangingMyAuthenticationFactorsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactorsInput"></a>

```csharp
public object ReAuthWhenChangingMyAuthenticationFactorsInput { get; }
```

- *Type:* object

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemasInput"></a>

```csharp
public string[] SchemasInput { get; }
```

- *Type:* string[]

---

##### `ServiceAdminCannotListOtherUsersInput`<sup>Optional</sup> <a name="ServiceAdminCannotListOtherUsersInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsersInput"></a>

```csharp
public object ServiceAdminCannotListOtherUsersInput { get; }
```

- *Type:* object

---

##### `SettingIdInput`<sup>Optional</sup> <a name="SettingIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingIdInput"></a>

```csharp
public string SettingIdInput { get; }
```

- *Type:* string

---

##### `SigningCertPublicAccessInput`<sup>Optional</sup> <a name="SigningCertPublicAccessInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccessInput"></a>

```csharp
public object SigningCertPublicAccessInput { get; }
```

- *Type:* object

---

##### `SubMappingAttrInput`<sup>Optional</sup> <a name="SubMappingAttrInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttrInput"></a>

```csharp
public string SubMappingAttrInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TenantCustomClaimsInput`<sup>Optional</sup> <a name="TenantCustomClaimsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tenantCustomClaimsInput"></a>

```csharp
public object TenantCustomClaimsInput { get; }
```

- *Type:* object

---

##### `TermsOfUseUrlInput`<sup>Optional</sup> <a name="TermsOfUseUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrlInput"></a>

```csharp
public string TermsOfUseUrlInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `AccountAlwaysTrustScope`<sup>Required</sup> <a name="AccountAlwaysTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.accountAlwaysTrustScope"></a>

```csharp
public object AccountAlwaysTrustScope { get; }
```

- *Type:* object

---

##### `AllowedDomains`<sup>Required</sup> <a name="AllowedDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedDomains"></a>

```csharp
public string[] AllowedDomains { get; }
```

- *Type:* string[]

---

##### `AllowedForgotPasswordFlowReturnUrls`<sup>Required</sup> <a name="AllowedForgotPasswordFlowReturnUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedForgotPasswordFlowReturnUrls"></a>

```csharp
public string[] AllowedForgotPasswordFlowReturnUrls { get; }
```

- *Type:* string[]

---

##### `AllowedNotificationRedirectUrls`<sup>Required</sup> <a name="AllowedNotificationRedirectUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.allowedNotificationRedirectUrls"></a>

```csharp
public string[] AllowedNotificationRedirectUrls { get; }
```

- *Type:* string[]

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `AuditEventRetentionPeriod`<sup>Required</sup> <a name="AuditEventRetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.auditEventRetentionPeriod"></a>

```csharp
public double AuditEventRetentionPeriod { get; }
```

- *Type:* double

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CloudMigrationCustomUrl`<sup>Required</sup> <a name="CloudMigrationCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationCustomUrl"></a>

```csharp
public string CloudMigrationCustomUrl { get; }
```

- *Type:* string

---

##### `CloudMigrationUrlEnabled`<sup>Required</sup> <a name="CloudMigrationUrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.cloudMigrationUrlEnabled"></a>

```csharp
public object CloudMigrationUrlEnabled { get; }
```

- *Type:* object

---

##### `ContactEmails`<sup>Required</sup> <a name="ContactEmails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.contactEmails"></a>

```csharp
public string[] ContactEmails { get; }
```

- *Type:* string[]

---

##### `CsrAccess`<sup>Required</sup> <a name="CsrAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.csrAccess"></a>

```csharp
public string CsrAccess { get; }
```

- *Type:* string

---

##### `CustomBranding`<sup>Required</sup> <a name="CustomBranding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customBranding"></a>

```csharp
public object CustomBranding { get; }
```

- *Type:* object

---

##### `CustomCssLocation`<sup>Required</sup> <a name="CustomCssLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customCssLocation"></a>

```csharp
public string CustomCssLocation { get; }
```

- *Type:* string

---

##### `CustomHtmlLocation`<sup>Required</sup> <a name="CustomHtmlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customHtmlLocation"></a>

```csharp
public string CustomHtmlLocation { get; }
```

- *Type:* string

---

##### `CustomTranslation`<sup>Required</sup> <a name="CustomTranslation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.customTranslation"></a>

```csharp
public string CustomTranslation { get; }
```

- *Type:* string

---

##### `DefaultTrustScope`<sup>Required</sup> <a name="DefaultTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.defaultTrustScope"></a>

```csharp
public string DefaultTrustScope { get; }
```

- *Type:* string

---

##### `DiagnosticLevel`<sup>Required</sup> <a name="DiagnosticLevel" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticLevel"></a>

```csharp
public double DiagnosticLevel { get; }
```

- *Type:* double

---

##### `DiagnosticRecordForSearchIdentifiesReturnedResources`<sup>Required</sup> <a name="DiagnosticRecordForSearchIdentifiesReturnedResources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.diagnosticRecordForSearchIdentifiesReturnedResources"></a>

```csharp
public object DiagnosticRecordForSearchIdentifiesReturnedResources { get; }
```

- *Type:* object

---

##### `EnableTermsOfUse`<sup>Required</sup> <a name="EnableTermsOfUse" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.enableTermsOfUse"></a>

```csharp
public object EnableTermsOfUse { get; }
```

- *Type:* object

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `IamUpstSessionExpiry`<sup>Required</sup> <a name="IamUpstSessionExpiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.iamUpstSessionExpiry"></a>

```csharp
public double IamUpstSessionExpiry { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IsHostedPage`<sup>Required</sup> <a name="IsHostedPage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.isHostedPage"></a>

```csharp
public object IsHostedPage { get; }
```

- *Type:* object

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `MaxNoOfAppCmvaToReturn`<sup>Required</sup> <a name="MaxNoOfAppCmvaToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppCmvaToReturn"></a>

```csharp
public double MaxNoOfAppCmvaToReturn { get; }
```

- *Type:* double

---

##### `MaxNoOfAppRoleMembersToReturn`<sup>Required</sup> <a name="MaxNoOfAppRoleMembersToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.maxNoOfAppRoleMembersToReturn"></a>

```csharp
public double MaxNoOfAppRoleMembersToReturn { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `PrevIssuer`<sup>Required</sup> <a name="PrevIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.prevIssuer"></a>

```csharp
public string PrevIssuer { get; }
```

- *Type:* string

---

##### `PrivacyPolicyUrl`<sup>Required</sup> <a name="PrivacyPolicyUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.privacyPolicyUrl"></a>

```csharp
public string PrivacyPolicyUrl { get; }
```

- *Type:* string

---

##### `ReAuthFactor`<sup>Required</sup> <a name="ReAuthFactor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthFactor"></a>

```csharp
public string[] ReAuthFactor { get; }
```

- *Type:* string[]

---

##### `ReAuthWhenChangingMyAuthenticationFactors`<sup>Required</sup> <a name="ReAuthWhenChangingMyAuthenticationFactors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.reAuthWhenChangingMyAuthenticationFactors"></a>

```csharp
public object ReAuthWhenChangingMyAuthenticationFactors { get; }
```

- *Type:* object

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `ServiceAdminCannotListOtherUsers`<sup>Required</sup> <a name="ServiceAdminCannotListOtherUsers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.serviceAdminCannotListOtherUsers"></a>

```csharp
public object ServiceAdminCannotListOtherUsers { get; }
```

- *Type:* object

---

##### `SettingId`<sup>Required</sup> <a name="SettingId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.settingId"></a>

```csharp
public string SettingId { get; }
```

- *Type:* string

---

##### `SigningCertPublicAccess`<sup>Required</sup> <a name="SigningCertPublicAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.signingCertPublicAccess"></a>

```csharp
public object SigningCertPublicAccess { get; }
```

- *Type:* object

---

##### `SubMappingAttr`<sup>Required</sup> <a name="SubMappingAttr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.subMappingAttr"></a>

```csharp
public string SubMappingAttr { get; }
```

- *Type:* string

---

##### `TermsOfUseUrl`<sup>Required</sup> <a name="TermsOfUseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.termsOfUseUrl"></a>

```csharp
public string TermsOfUseUrl { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSettingCertificateValidation <a name="IdentityDomainsSettingCertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingCertificateValidation {
    object CrlCheckOnOcspFailureEnabled = null,
    object CrlEnabled = null,
    string CrlLocation = null,
    double CrlRefreshInterval = null,
    object OcspEnabled = null,
    string OcspResponderUrl = null,
    object OcspSettingsResponderUrlPreferred = null,
    string OcspSigningCertificateAlias = null,
    double OcspTimeoutDuration = null,
    object OcspUnknownResponseStatusAllowed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlCheckOnOcspFailureEnabled">CrlCheckOnOcspFailureEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_check_on_ocsp_failure_enabled IdentityDomainsSetting#crl_check_on_ocsp_failure_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlEnabled">CrlEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_enabled IdentityDomainsSetting#crl_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlLocation">CrlLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_location IdentityDomainsSetting#crl_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlRefreshInterval">CrlRefreshInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_refresh_interval IdentityDomainsSetting#crl_refresh_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspEnabled">OcspEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_enabled IdentityDomainsSetting#ocsp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspResponderUrl">OcspResponderUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_responder_url IdentityDomainsSetting#ocsp_responder_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSettingsResponderUrlPreferred">OcspSettingsResponderUrlPreferred</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_settings_responder_url_preferred IdentityDomainsSetting#ocsp_settings_responder_url_preferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSigningCertificateAlias">OcspSigningCertificateAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_signing_certificate_alias IdentityDomainsSetting#ocsp_signing_certificate_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspTimeoutDuration">OcspTimeoutDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_timeout_duration IdentityDomainsSetting#ocsp_timeout_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspUnknownResponseStatusAllowed">OcspUnknownResponseStatusAllowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_unknown_response_status_allowed IdentityDomainsSetting#ocsp_unknown_response_status_allowed}. |

---

##### `CrlCheckOnOcspFailureEnabled`<sup>Optional</sup> <a name="CrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlCheckOnOcspFailureEnabled"></a>

```csharp
public object CrlCheckOnOcspFailureEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_check_on_ocsp_failure_enabled IdentityDomainsSetting#crl_check_on_ocsp_failure_enabled}.

---

##### `CrlEnabled`<sup>Optional</sup> <a name="CrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlEnabled"></a>

```csharp
public object CrlEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_enabled IdentityDomainsSetting#crl_enabled}.

---

##### `CrlLocation`<sup>Optional</sup> <a name="CrlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlLocation"></a>

```csharp
public string CrlLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_location IdentityDomainsSetting#crl_location}.

---

##### `CrlRefreshInterval`<sup>Optional</sup> <a name="CrlRefreshInterval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.crlRefreshInterval"></a>

```csharp
public double CrlRefreshInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#crl_refresh_interval IdentityDomainsSetting#crl_refresh_interval}.

---

##### `OcspEnabled`<sup>Optional</sup> <a name="OcspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspEnabled"></a>

```csharp
public object OcspEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_enabled IdentityDomainsSetting#ocsp_enabled}.

---

##### `OcspResponderUrl`<sup>Optional</sup> <a name="OcspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspResponderUrl"></a>

```csharp
public string OcspResponderUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_responder_url IdentityDomainsSetting#ocsp_responder_url}.

---

##### `OcspSettingsResponderUrlPreferred`<sup>Optional</sup> <a name="OcspSettingsResponderUrlPreferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSettingsResponderUrlPreferred"></a>

```csharp
public object OcspSettingsResponderUrlPreferred { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_settings_responder_url_preferred IdentityDomainsSetting#ocsp_settings_responder_url_preferred}.

---

##### `OcspSigningCertificateAlias`<sup>Optional</sup> <a name="OcspSigningCertificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspSigningCertificateAlias"></a>

```csharp
public string OcspSigningCertificateAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_signing_certificate_alias IdentityDomainsSetting#ocsp_signing_certificate_alias}.

---

##### `OcspTimeoutDuration`<sup>Optional</sup> <a name="OcspTimeoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspTimeoutDuration"></a>

```csharp
public double OcspTimeoutDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_timeout_duration IdentityDomainsSetting#ocsp_timeout_duration}.

---

##### `OcspUnknownResponseStatusAllowed`<sup>Optional</sup> <a name="OcspUnknownResponseStatusAllowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation.property.ocspUnknownResponseStatusAllowed"></a>

```csharp
public object OcspUnknownResponseStatusAllowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocsp_unknown_response_status_allowed IdentityDomainsSetting#ocsp_unknown_response_status_allowed}.

---

### IdentityDomainsSettingCloudGateCorsSettings <a name="IdentityDomainsSettingCloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingCloudGateCorsSettings {
    string[] CloudGateCorsAllowedOrigins = null,
    object CloudGateCorsAllowNullOrigin = null,
    object CloudGateCorsEnabled = null,
    string[] CloudGateCorsExposedHeaders = null,
    double CloudGateCorsMaxAge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowedOrigins">CloudGateCorsAllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allowed_origins IdentityDomainsSetting#cloud_gate_cors_allowed_origins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowNullOrigin">CloudGateCorsAllowNullOrigin</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allow_null_origin IdentityDomainsSetting#cloud_gate_cors_allow_null_origin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsEnabled">CloudGateCorsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_enabled IdentityDomainsSetting#cloud_gate_cors_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsExposedHeaders">CloudGateCorsExposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_exposed_headers IdentityDomainsSetting#cloud_gate_cors_exposed_headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsMaxAge">CloudGateCorsMaxAge</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_max_age IdentityDomainsSetting#cloud_gate_cors_max_age}. |

---

##### `CloudGateCorsAllowedOrigins`<sup>Optional</sup> <a name="CloudGateCorsAllowedOrigins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowedOrigins"></a>

```csharp
public string[] CloudGateCorsAllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allowed_origins IdentityDomainsSetting#cloud_gate_cors_allowed_origins}.

---

##### `CloudGateCorsAllowNullOrigin`<sup>Optional</sup> <a name="CloudGateCorsAllowNullOrigin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsAllowNullOrigin"></a>

```csharp
public object CloudGateCorsAllowNullOrigin { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_allow_null_origin IdentityDomainsSetting#cloud_gate_cors_allow_null_origin}.

---

##### `CloudGateCorsEnabled`<sup>Optional</sup> <a name="CloudGateCorsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsEnabled"></a>

```csharp
public object CloudGateCorsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_enabled IdentityDomainsSetting#cloud_gate_cors_enabled}.

---

##### `CloudGateCorsExposedHeaders`<sup>Optional</sup> <a name="CloudGateCorsExposedHeaders" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsExposedHeaders"></a>

```csharp
public string[] CloudGateCorsExposedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_exposed_headers IdentityDomainsSetting#cloud_gate_cors_exposed_headers}.

---

##### `CloudGateCorsMaxAge`<sup>Optional</sup> <a name="CloudGateCorsMaxAge" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings.property.cloudGateCorsMaxAge"></a>

```csharp
public double CloudGateCorsMaxAge { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_max_age IdentityDomainsSetting#cloud_gate_cors_max_age}.

---

### IdentityDomainsSettingCompanyNames <a name="IdentityDomainsSettingCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingCompanyNames {
    string Locale,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.locale">Locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNames.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingConfig <a name="IdentityDomainsSettingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CsrAccess,
    string IdcsEndpoint,
    string[] Schemas,
    string SettingId,
    object AccountAlwaysTrustScope = null,
    string[] AllowedDomains = null,
    string[] AllowedForgotPasswordFlowReturnUrls = null,
    string[] AllowedNotificationRedirectUrls = null,
    string Attributes = null,
    string[] AttributeSets = null,
    double AuditEventRetentionPeriod = null,
    string Authorization = null,
    IdentityDomainsSettingCertificateValidation CertificateValidation = null,
    IdentityDomainsSettingCloudGateCorsSettings CloudGateCorsSettings = null,
    string CloudMigrationCustomUrl = null,
    object CloudMigrationUrlEnabled = null,
    object CompanyNames = null,
    string[] ContactEmails = null,
    object CustomBranding = null,
    string CustomCssLocation = null,
    string CustomHtmlLocation = null,
    string CustomTranslation = null,
    string DefaultTrustScope = null,
    double DiagnosticLevel = null,
    object DiagnosticRecordForSearchIdentifiesReturnedResources = null,
    object EnableTermsOfUse = null,
    string ExternalId = null,
    double IamUpstSessionExpiry = null,
    string Id = null,
    object Images = null,
    object IsHostedPage = null,
    string Issuer = null,
    string Locale = null,
    object LoginTexts = null,
    double MaxNoOfAppCmvaToReturn = null,
    double MaxNoOfAppRoleMembersToReturn = null,
    string Ocid = null,
    string PreferredLanguage = null,
    string PrevIssuer = null,
    string PrivacyPolicyUrl = null,
    object PurgeConfigs = null,
    string[] ReAuthFactor = null,
    object ReAuthWhenChangingMyAuthenticationFactors = null,
    string ResourceTypeSchemaVersion = null,
    object ServiceAdminCannotListOtherUsers = null,
    object SigningCertPublicAccess = null,
    string SubMappingAttr = null,
    object Tags = null,
    object TenantCustomClaims = null,
    string TermsOfUseUrl = null,
    IdentityDomainsSettingTimeouts Timeouts = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.csrAccess">CsrAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#csr_access IdentityDomainsSetting#csr_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#idcs_endpoint IdentityDomainsSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.schemas">Schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#schemas IdentityDomainsSetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.settingId">SettingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#setting_id IdentityDomainsSetting#setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.accountAlwaysTrustScope">AccountAlwaysTrustScope</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#account_always_trust_scope IdentityDomainsSetting#account_always_trust_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedDomains">AllowedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_domains IdentityDomainsSetting#allowed_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedForgotPasswordFlowReturnUrls">AllowedForgotPasswordFlowReturnUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_forgot_password_flow_return_urls IdentityDomainsSetting#allowed_forgot_password_flow_return_urls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedNotificationRedirectUrls">AllowedNotificationRedirectUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_notification_redirect_urls IdentityDomainsSetting#allowed_notification_redirect_urls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attributes IdentityDomainsSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attribute_sets IdentityDomainsSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.auditEventRetentionPeriod">AuditEventRetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#audit_event_retention_period IdentityDomainsSetting#audit_event_retention_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#authorization IdentityDomainsSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.certificateValidation">CertificateValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | certificate_validation block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudGateCorsSettings">CloudGateCorsSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | cloud_gate_cors_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationCustomUrl">CloudMigrationCustomUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_custom_url IdentityDomainsSetting#cloud_migration_custom_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationUrlEnabled">CloudMigrationUrlEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_url_enabled IdentityDomainsSetting#cloud_migration_url_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.companyNames">CompanyNames</a></code> | <code>object</code> | company_names block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.contactEmails">ContactEmails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#contact_emails IdentityDomainsSetting#contact_emails}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customBranding">CustomBranding</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_branding IdentityDomainsSetting#custom_branding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customCssLocation">CustomCssLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_css_location IdentityDomainsSetting#custom_css_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customHtmlLocation">CustomHtmlLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_html_location IdentityDomainsSetting#custom_html_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customTranslation">CustomTranslation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_translation IdentityDomainsSetting#custom_translation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.defaultTrustScope">DefaultTrustScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#default_trust_scope IdentityDomainsSetting#default_trust_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticLevel">DiagnosticLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_level IdentityDomainsSetting#diagnostic_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticRecordForSearchIdentifiesReturnedResources">DiagnosticRecordForSearchIdentifiesReturnedResources</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_record_for_search_identifies_returned_resources IdentityDomainsSetting#diagnostic_record_for_search_identifies_returned_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.enableTermsOfUse">EnableTermsOfUse</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#enable_terms_of_use IdentityDomainsSetting#enable_terms_of_use}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#external_id IdentityDomainsSetting#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.iamUpstSessionExpiry">IamUpstSessionExpiry</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#iam_upst_session_expiry IdentityDomainsSetting#iam_upst_session_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#id IdentityDomainsSetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.images">Images</a></code> | <code>object</code> | images block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.isHostedPage">IsHostedPage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#is_hosted_page IdentityDomainsSetting#is_hosted_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#issuer IdentityDomainsSetting#issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.locale">Locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.loginTexts">LoginTexts</a></code> | <code>object</code> | login_texts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppCmvaToReturn">MaxNoOfAppCmvaToReturn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_cmva_to_return IdentityDomainsSetting#max_no_of_app_cmva_to_return}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppRoleMembersToReturn">MaxNoOfAppRoleMembersToReturn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_role_members_to_return IdentityDomainsSetting#max_no_of_app_role_members_to_return}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.ocid">Ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocid IdentityDomainsSetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#preferred_language IdentityDomainsSetting#preferred_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.prevIssuer">PrevIssuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#prev_issuer IdentityDomainsSetting#prev_issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.privacyPolicyUrl">PrivacyPolicyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#privacy_policy_url IdentityDomainsSetting#privacy_policy_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.purgeConfigs">PurgeConfigs</a></code> | <code>object</code> | purge_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthFactor">ReAuthFactor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_factor IdentityDomainsSetting#re_auth_factor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthWhenChangingMyAuthenticationFactors">ReAuthWhenChangingMyAuthenticationFactors</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_when_changing_my_authentication_factors IdentityDomainsSetting#re_auth_when_changing_my_authentication_factors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_type_schema_version IdentityDomainsSetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.serviceAdminCannotListOtherUsers">ServiceAdminCannotListOtherUsers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#service_admin_cannot_list_other_users IdentityDomainsSetting#service_admin_cannot_list_other_users}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.signingCertPublicAccess">SigningCertPublicAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#signing_cert_public_access IdentityDomainsSetting#signing_cert_public_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.subMappingAttr">SubMappingAttr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#sub_mapping_attr IdentityDomainsSetting#sub_mapping_attr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tenantCustomClaims">TenantCustomClaims</a></code> | <code>object</code> | tenant_custom_claims block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.termsOfUseUrl">TermsOfUseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#terms_of_use_url IdentityDomainsSetting#terms_of_use_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timezone IdentityDomainsSetting#timezone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CsrAccess`<sup>Required</sup> <a name="CsrAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.csrAccess"></a>

```csharp
public string CsrAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#csr_access IdentityDomainsSetting#csr_access}.

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#idcs_endpoint IdentityDomainsSetting#idcs_endpoint}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.schemas"></a>

```csharp
public string[] Schemas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#schemas IdentityDomainsSetting#schemas}.

---

##### `SettingId`<sup>Required</sup> <a name="SettingId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.settingId"></a>

```csharp
public string SettingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#setting_id IdentityDomainsSetting#setting_id}.

---

##### `AccountAlwaysTrustScope`<sup>Optional</sup> <a name="AccountAlwaysTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.accountAlwaysTrustScope"></a>

```csharp
public object AccountAlwaysTrustScope { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#account_always_trust_scope IdentityDomainsSetting#account_always_trust_scope}.

---

##### `AllowedDomains`<sup>Optional</sup> <a name="AllowedDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedDomains"></a>

```csharp
public string[] AllowedDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_domains IdentityDomainsSetting#allowed_domains}.

---

##### `AllowedForgotPasswordFlowReturnUrls`<sup>Optional</sup> <a name="AllowedForgotPasswordFlowReturnUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedForgotPasswordFlowReturnUrls"></a>

```csharp
public string[] AllowedForgotPasswordFlowReturnUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_forgot_password_flow_return_urls IdentityDomainsSetting#allowed_forgot_password_flow_return_urls}.

---

##### `AllowedNotificationRedirectUrls`<sup>Optional</sup> <a name="AllowedNotificationRedirectUrls" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.allowedNotificationRedirectUrls"></a>

```csharp
public string[] AllowedNotificationRedirectUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#allowed_notification_redirect_urls IdentityDomainsSetting#allowed_notification_redirect_urls}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attributes IdentityDomainsSetting#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#attribute_sets IdentityDomainsSetting#attribute_sets}.

---

##### `AuditEventRetentionPeriod`<sup>Optional</sup> <a name="AuditEventRetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.auditEventRetentionPeriod"></a>

```csharp
public double AuditEventRetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#audit_event_retention_period IdentityDomainsSetting#audit_event_retention_period}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#authorization IdentityDomainsSetting#authorization}.

---

##### `CertificateValidation`<sup>Optional</sup> <a name="CertificateValidation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.certificateValidation"></a>

```csharp
public IdentityDomainsSettingCertificateValidation CertificateValidation { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

certificate_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#certificate_validation IdentityDomainsSetting#certificate_validation}

---

##### `CloudGateCorsSettings`<sup>Optional</sup> <a name="CloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudGateCorsSettings"></a>

```csharp
public IdentityDomainsSettingCloudGateCorsSettings CloudGateCorsSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

cloud_gate_cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_gate_cors_settings IdentityDomainsSetting#cloud_gate_cors_settings}

---

##### `CloudMigrationCustomUrl`<sup>Optional</sup> <a name="CloudMigrationCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationCustomUrl"></a>

```csharp
public string CloudMigrationCustomUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_custom_url IdentityDomainsSetting#cloud_migration_custom_url}.

---

##### `CloudMigrationUrlEnabled`<sup>Optional</sup> <a name="CloudMigrationUrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.cloudMigrationUrlEnabled"></a>

```csharp
public object CloudMigrationUrlEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#cloud_migration_url_enabled IdentityDomainsSetting#cloud_migration_url_enabled}.

---

##### `CompanyNames`<sup>Optional</sup> <a name="CompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.companyNames"></a>

```csharp
public object CompanyNames { get; set; }
```

- *Type:* object

company_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#company_names IdentityDomainsSetting#company_names}

---

##### `ContactEmails`<sup>Optional</sup> <a name="ContactEmails" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.contactEmails"></a>

```csharp
public string[] ContactEmails { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#contact_emails IdentityDomainsSetting#contact_emails}.

---

##### `CustomBranding`<sup>Optional</sup> <a name="CustomBranding" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customBranding"></a>

```csharp
public object CustomBranding { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_branding IdentityDomainsSetting#custom_branding}.

---

##### `CustomCssLocation`<sup>Optional</sup> <a name="CustomCssLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customCssLocation"></a>

```csharp
public string CustomCssLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_css_location IdentityDomainsSetting#custom_css_location}.

---

##### `CustomHtmlLocation`<sup>Optional</sup> <a name="CustomHtmlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customHtmlLocation"></a>

```csharp
public string CustomHtmlLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_html_location IdentityDomainsSetting#custom_html_location}.

---

##### `CustomTranslation`<sup>Optional</sup> <a name="CustomTranslation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.customTranslation"></a>

```csharp
public string CustomTranslation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#custom_translation IdentityDomainsSetting#custom_translation}.

---

##### `DefaultTrustScope`<sup>Optional</sup> <a name="DefaultTrustScope" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.defaultTrustScope"></a>

```csharp
public string DefaultTrustScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#default_trust_scope IdentityDomainsSetting#default_trust_scope}.

---

##### `DiagnosticLevel`<sup>Optional</sup> <a name="DiagnosticLevel" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticLevel"></a>

```csharp
public double DiagnosticLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_level IdentityDomainsSetting#diagnostic_level}.

---

##### `DiagnosticRecordForSearchIdentifiesReturnedResources`<sup>Optional</sup> <a name="DiagnosticRecordForSearchIdentifiesReturnedResources" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.diagnosticRecordForSearchIdentifiesReturnedResources"></a>

```csharp
public object DiagnosticRecordForSearchIdentifiesReturnedResources { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#diagnostic_record_for_search_identifies_returned_resources IdentityDomainsSetting#diagnostic_record_for_search_identifies_returned_resources}.

---

##### `EnableTermsOfUse`<sup>Optional</sup> <a name="EnableTermsOfUse" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.enableTermsOfUse"></a>

```csharp
public object EnableTermsOfUse { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#enable_terms_of_use IdentityDomainsSetting#enable_terms_of_use}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#external_id IdentityDomainsSetting#external_id}.

---

##### `IamUpstSessionExpiry`<sup>Optional</sup> <a name="IamUpstSessionExpiry" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.iamUpstSessionExpiry"></a>

```csharp
public double IamUpstSessionExpiry { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#iam_upst_session_expiry IdentityDomainsSetting#iam_upst_session_expiry}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#id IdentityDomainsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Images`<sup>Optional</sup> <a name="Images" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.images"></a>

```csharp
public object Images { get; set; }
```

- *Type:* object

images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#images IdentityDomainsSetting#images}

---

##### `IsHostedPage`<sup>Optional</sup> <a name="IsHostedPage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.isHostedPage"></a>

```csharp
public object IsHostedPage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#is_hosted_page IdentityDomainsSetting#is_hosted_page}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#issuer IdentityDomainsSetting#issuer}.

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `LoginTexts`<sup>Optional</sup> <a name="LoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.loginTexts"></a>

```csharp
public object LoginTexts { get; set; }
```

- *Type:* object

login_texts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#login_texts IdentityDomainsSetting#login_texts}

---

##### `MaxNoOfAppCmvaToReturn`<sup>Optional</sup> <a name="MaxNoOfAppCmvaToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppCmvaToReturn"></a>

```csharp
public double MaxNoOfAppCmvaToReturn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_cmva_to_return IdentityDomainsSetting#max_no_of_app_cmva_to_return}.

---

##### `MaxNoOfAppRoleMembersToReturn`<sup>Optional</sup> <a name="MaxNoOfAppRoleMembersToReturn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.maxNoOfAppRoleMembersToReturn"></a>

```csharp
public double MaxNoOfAppRoleMembersToReturn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#max_no_of_app_role_members_to_return IdentityDomainsSetting#max_no_of_app_role_members_to_return}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#ocid IdentityDomainsSetting#ocid}.

---

##### `PreferredLanguage`<sup>Optional</sup> <a name="PreferredLanguage" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#preferred_language IdentityDomainsSetting#preferred_language}.

---

##### `PrevIssuer`<sup>Optional</sup> <a name="PrevIssuer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.prevIssuer"></a>

```csharp
public string PrevIssuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#prev_issuer IdentityDomainsSetting#prev_issuer}.

---

##### `PrivacyPolicyUrl`<sup>Optional</sup> <a name="PrivacyPolicyUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.privacyPolicyUrl"></a>

```csharp
public string PrivacyPolicyUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#privacy_policy_url IdentityDomainsSetting#privacy_policy_url}.

---

##### `PurgeConfigs`<sup>Optional</sup> <a name="PurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.purgeConfigs"></a>

```csharp
public object PurgeConfigs { get; set; }
```

- *Type:* object

purge_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#purge_configs IdentityDomainsSetting#purge_configs}

---

##### `ReAuthFactor`<sup>Optional</sup> <a name="ReAuthFactor" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthFactor"></a>

```csharp
public string[] ReAuthFactor { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_factor IdentityDomainsSetting#re_auth_factor}.

---

##### `ReAuthWhenChangingMyAuthenticationFactors`<sup>Optional</sup> <a name="ReAuthWhenChangingMyAuthenticationFactors" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.reAuthWhenChangingMyAuthenticationFactors"></a>

```csharp
public object ReAuthWhenChangingMyAuthenticationFactors { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#re_auth_when_changing_my_authentication_factors IdentityDomainsSetting#re_auth_when_changing_my_authentication_factors}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_type_schema_version IdentityDomainsSetting#resource_type_schema_version}.

---

##### `ServiceAdminCannotListOtherUsers`<sup>Optional</sup> <a name="ServiceAdminCannotListOtherUsers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.serviceAdminCannotListOtherUsers"></a>

```csharp
public object ServiceAdminCannotListOtherUsers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#service_admin_cannot_list_other_users IdentityDomainsSetting#service_admin_cannot_list_other_users}.

---

##### `SigningCertPublicAccess`<sup>Optional</sup> <a name="SigningCertPublicAccess" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.signingCertPublicAccess"></a>

```csharp
public object SigningCertPublicAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#signing_cert_public_access IdentityDomainsSetting#signing_cert_public_access}.

---

##### `SubMappingAttr`<sup>Optional</sup> <a name="SubMappingAttr" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.subMappingAttr"></a>

```csharp
public string SubMappingAttr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#sub_mapping_attr IdentityDomainsSetting#sub_mapping_attr}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#tags IdentityDomainsSetting#tags}

---

##### `TenantCustomClaims`<sup>Optional</sup> <a name="TenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.tenantCustomClaims"></a>

```csharp
public object TenantCustomClaims { get; set; }
```

- *Type:* object

tenant_custom_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#tenant_custom_claims IdentityDomainsSetting#tenant_custom_claims}

---

##### `TermsOfUseUrl`<sup>Optional</sup> <a name="TermsOfUseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.termsOfUseUrl"></a>

```csharp
public string TermsOfUseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#terms_of_use_url IdentityDomainsSetting#terms_of_use_url}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timeouts"></a>

```csharp
public IdentityDomainsSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts">IdentityDomainsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timeouts IdentityDomainsSetting#timeouts}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#timezone IdentityDomainsSetting#timezone}.

---

### IdentityDomainsSettingDefaultCompanyNames <a name="IdentityDomainsSettingDefaultCompanyNames" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingDefaultCompanyNames {

};
```


### IdentityDomainsSettingDefaultImages <a name="IdentityDomainsSettingDefaultImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingDefaultImages {

};
```


### IdentityDomainsSettingDefaultLoginTexts <a name="IdentityDomainsSettingDefaultLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingDefaultLoginTexts {

};
```


### IdentityDomainsSettingIdcsCreatedBy <a name="IdentityDomainsSettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingIdcsCreatedBy {

};
```


### IdentityDomainsSettingIdcsLastModifiedBy <a name="IdentityDomainsSettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingIdcsLastModifiedBy {

};
```


### IdentityDomainsSettingImages <a name="IdentityDomainsSettingImages" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingImages {
    string Type,
    string Value,
    string Display = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#type IdentityDomainsSetting#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.display">Display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#display IdentityDomainsSetting#display}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#type IdentityDomainsSetting#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImages.property.display"></a>

```csharp
public string Display { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#display IdentityDomainsSetting#display}.

---

### IdentityDomainsSettingLoginTexts <a name="IdentityDomainsSettingLoginTexts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingLoginTexts {
    string Locale,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.locale">Locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTexts.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingMeta <a name="IdentityDomainsSettingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingMeta {

};
```


### IdentityDomainsSettingPurgeConfigs <a name="IdentityDomainsSettingPurgeConfigs" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingPurgeConfigs {
    string ResourceName,
    double RetentionPeriod
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.resourceName">ResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_name IdentityDomainsSetting#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#retention_period IdentityDomainsSetting#retention_period}. |

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#resource_name IdentityDomainsSetting#resource_name}.

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigs.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#retention_period IdentityDomainsSetting#retention_period}.

---

### IdentityDomainsSettingTags <a name="IdentityDomainsSettingTags" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#key IdentityDomainsSetting#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#key IdentityDomainsSetting#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

### IdentityDomainsSettingTenantCustomClaims <a name="IdentityDomainsSettingTenantCustomClaims" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingTenantCustomClaims {
    object AllScopes,
    object Expression,
    string Mode,
    string Name,
    string TokenType,
    string Value,
    string[] Scopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.allScopes">AllScopes</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#all_scopes IdentityDomainsSetting#all_scopes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.expression">Expression</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#expression IdentityDomainsSetting#expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#mode IdentityDomainsSetting#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#name IdentityDomainsSetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.tokenType">TokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#token_type IdentityDomainsSetting#token_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#scopes IdentityDomainsSetting#scopes}. |

---

##### `AllScopes`<sup>Required</sup> <a name="AllScopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.allScopes"></a>

```csharp
public object AllScopes { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#all_scopes IdentityDomainsSetting#all_scopes}.

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.expression"></a>

```csharp
public object Expression { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#expression IdentityDomainsSetting#expression}.

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#mode IdentityDomainsSetting#mode}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#name IdentityDomainsSetting#name}.

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#token_type IdentityDomainsSetting#token_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaims.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#scopes IdentityDomainsSetting#scopes}.

---

### IdentityDomainsSettingTimeouts <a name="IdentityDomainsSettingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#create IdentityDomainsSetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#delete IdentityDomainsSetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#update IdentityDomainsSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#create IdentityDomainsSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#delete IdentityDomainsSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_setting#update IdentityDomainsSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSettingCertificateValidationOutputReference <a name="IdentityDomainsSettingCertificateValidationOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingCertificateValidationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrlCheckOnOcspFailureEnabled` <a name="ResetCrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlCheckOnOcspFailureEnabled"></a>

```csharp
private void ResetCrlCheckOnOcspFailureEnabled()
```

##### `ResetCrlEnabled` <a name="ResetCrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlEnabled"></a>

```csharp
private void ResetCrlEnabled()
```

##### `ResetCrlLocation` <a name="ResetCrlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlLocation"></a>

```csharp
private void ResetCrlLocation()
```

##### `ResetCrlRefreshInterval` <a name="ResetCrlRefreshInterval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetCrlRefreshInterval"></a>

```csharp
private void ResetCrlRefreshInterval()
```

##### `ResetOcspEnabled` <a name="ResetOcspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspEnabled"></a>

```csharp
private void ResetOcspEnabled()
```

##### `ResetOcspResponderUrl` <a name="ResetOcspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspResponderUrl"></a>

```csharp
private void ResetOcspResponderUrl()
```

##### `ResetOcspSettingsResponderUrlPreferred` <a name="ResetOcspSettingsResponderUrlPreferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSettingsResponderUrlPreferred"></a>

```csharp
private void ResetOcspSettingsResponderUrlPreferred()
```

##### `ResetOcspSigningCertificateAlias` <a name="ResetOcspSigningCertificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspSigningCertificateAlias"></a>

```csharp
private void ResetOcspSigningCertificateAlias()
```

##### `ResetOcspTimeoutDuration` <a name="ResetOcspTimeoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspTimeoutDuration"></a>

```csharp
private void ResetOcspTimeoutDuration()
```

##### `ResetOcspUnknownResponseStatusAllowed` <a name="ResetOcspUnknownResponseStatusAllowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.resetOcspUnknownResponseStatusAllowed"></a>

```csharp
private void ResetOcspUnknownResponseStatusAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabledInput">CrlCheckOnOcspFailureEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabledInput">CrlEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocationInput">CrlLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshIntervalInput">CrlRefreshIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabledInput">OcspEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrlInput">OcspResponderUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferredInput">OcspSettingsResponderUrlPreferredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAliasInput">OcspSigningCertificateAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDurationInput">OcspTimeoutDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowedInput">OcspUnknownResponseStatusAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabled">CrlCheckOnOcspFailureEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabled">CrlEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocation">CrlLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshInterval">CrlRefreshInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabled">OcspEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrl">OcspResponderUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferred">OcspSettingsResponderUrlPreferred</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAlias">OcspSigningCertificateAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDuration">OcspTimeoutDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowed">OcspUnknownResponseStatusAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrlCheckOnOcspFailureEnabledInput`<sup>Optional</sup> <a name="CrlCheckOnOcspFailureEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabledInput"></a>

```csharp
public object CrlCheckOnOcspFailureEnabledInput { get; }
```

- *Type:* object

---

##### `CrlEnabledInput`<sup>Optional</sup> <a name="CrlEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabledInput"></a>

```csharp
public object CrlEnabledInput { get; }
```

- *Type:* object

---

##### `CrlLocationInput`<sup>Optional</sup> <a name="CrlLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocationInput"></a>

```csharp
public string CrlLocationInput { get; }
```

- *Type:* string

---

##### `CrlRefreshIntervalInput`<sup>Optional</sup> <a name="CrlRefreshIntervalInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshIntervalInput"></a>

```csharp
public double CrlRefreshIntervalInput { get; }
```

- *Type:* double

---

##### `OcspEnabledInput`<sup>Optional</sup> <a name="OcspEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabledInput"></a>

```csharp
public object OcspEnabledInput { get; }
```

- *Type:* object

---

##### `OcspResponderUrlInput`<sup>Optional</sup> <a name="OcspResponderUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrlInput"></a>

```csharp
public string OcspResponderUrlInput { get; }
```

- *Type:* string

---

##### `OcspSettingsResponderUrlPreferredInput`<sup>Optional</sup> <a name="OcspSettingsResponderUrlPreferredInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferredInput"></a>

```csharp
public object OcspSettingsResponderUrlPreferredInput { get; }
```

- *Type:* object

---

##### `OcspSigningCertificateAliasInput`<sup>Optional</sup> <a name="OcspSigningCertificateAliasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAliasInput"></a>

```csharp
public string OcspSigningCertificateAliasInput { get; }
```

- *Type:* string

---

##### `OcspTimeoutDurationInput`<sup>Optional</sup> <a name="OcspTimeoutDurationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDurationInput"></a>

```csharp
public double OcspTimeoutDurationInput { get; }
```

- *Type:* double

---

##### `OcspUnknownResponseStatusAllowedInput`<sup>Optional</sup> <a name="OcspUnknownResponseStatusAllowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowedInput"></a>

```csharp
public object OcspUnknownResponseStatusAllowedInput { get; }
```

- *Type:* object

---

##### `CrlCheckOnOcspFailureEnabled`<sup>Required</sup> <a name="CrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```csharp
public object CrlCheckOnOcspFailureEnabled { get; }
```

- *Type:* object

---

##### `CrlEnabled`<sup>Required</sup> <a name="CrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlEnabled"></a>

```csharp
public object CrlEnabled { get; }
```

- *Type:* object

---

##### `CrlLocation`<sup>Required</sup> <a name="CrlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlLocation"></a>

```csharp
public string CrlLocation { get; }
```

- *Type:* string

---

##### `CrlRefreshInterval`<sup>Required</sup> <a name="CrlRefreshInterval" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.crlRefreshInterval"></a>

```csharp
public double CrlRefreshInterval { get; }
```

- *Type:* double

---

##### `OcspEnabled`<sup>Required</sup> <a name="OcspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspEnabled"></a>

```csharp
public object OcspEnabled { get; }
```

- *Type:* object

---

##### `OcspResponderUrl`<sup>Required</sup> <a name="OcspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspResponderUrl"></a>

```csharp
public string OcspResponderUrl { get; }
```

- *Type:* string

---

##### `OcspSettingsResponderUrlPreferred`<sup>Required</sup> <a name="OcspSettingsResponderUrlPreferred" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferred"></a>

```csharp
public object OcspSettingsResponderUrlPreferred { get; }
```

- *Type:* object

---

##### `OcspSigningCertificateAlias`<sup>Required</sup> <a name="OcspSigningCertificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspSigningCertificateAlias"></a>

```csharp
public string OcspSigningCertificateAlias { get; }
```

- *Type:* string

---

##### `OcspTimeoutDuration`<sup>Required</sup> <a name="OcspTimeoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspTimeoutDuration"></a>

```csharp
public double OcspTimeoutDuration { get; }
```

- *Type:* double

---

##### `OcspUnknownResponseStatusAllowed`<sup>Required</sup> <a name="OcspUnknownResponseStatusAllowed" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowed"></a>

```csharp
public object OcspUnknownResponseStatusAllowed { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidationOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSettingCertificateValidation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCertificateValidation">IdentityDomainsSettingCertificateValidation</a>

---


### IdentityDomainsSettingCloudGateCorsSettingsOutputReference <a name="IdentityDomainsSettingCloudGateCorsSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingCloudGateCorsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudGateCorsAllowedOrigins` <a name="ResetCloudGateCorsAllowedOrigins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowedOrigins"></a>

```csharp
private void ResetCloudGateCorsAllowedOrigins()
```

##### `ResetCloudGateCorsAllowNullOrigin` <a name="ResetCloudGateCorsAllowNullOrigin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsAllowNullOrigin"></a>

```csharp
private void ResetCloudGateCorsAllowNullOrigin()
```

##### `ResetCloudGateCorsEnabled` <a name="ResetCloudGateCorsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsEnabled"></a>

```csharp
private void ResetCloudGateCorsEnabled()
```

##### `ResetCloudGateCorsExposedHeaders` <a name="ResetCloudGateCorsExposedHeaders" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsExposedHeaders"></a>

```csharp
private void ResetCloudGateCorsExposedHeaders()
```

##### `ResetCloudGateCorsMaxAge` <a name="ResetCloudGateCorsMaxAge" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.resetCloudGateCorsMaxAge"></a>

```csharp
private void ResetCloudGateCorsMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOriginsInput">CloudGateCorsAllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOriginInput">CloudGateCorsAllowNullOriginInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabledInput">CloudGateCorsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeadersInput">CloudGateCorsExposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAgeInput">CloudGateCorsMaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOrigins">CloudGateCorsAllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOrigin">CloudGateCorsAllowNullOrigin</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabled">CloudGateCorsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeaders">CloudGateCorsExposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAge">CloudGateCorsMaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudGateCorsAllowedOriginsInput`<sup>Optional</sup> <a name="CloudGateCorsAllowedOriginsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOriginsInput"></a>

```csharp
public string[] CloudGateCorsAllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `CloudGateCorsAllowNullOriginInput`<sup>Optional</sup> <a name="CloudGateCorsAllowNullOriginInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOriginInput"></a>

```csharp
public object CloudGateCorsAllowNullOriginInput { get; }
```

- *Type:* object

---

##### `CloudGateCorsEnabledInput`<sup>Optional</sup> <a name="CloudGateCorsEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabledInput"></a>

```csharp
public object CloudGateCorsEnabledInput { get; }
```

- *Type:* object

---

##### `CloudGateCorsExposedHeadersInput`<sup>Optional</sup> <a name="CloudGateCorsExposedHeadersInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeadersInput"></a>

```csharp
public string[] CloudGateCorsExposedHeadersInput { get; }
```

- *Type:* string[]

---

##### `CloudGateCorsMaxAgeInput`<sup>Optional</sup> <a name="CloudGateCorsMaxAgeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAgeInput"></a>

```csharp
public double CloudGateCorsMaxAgeInput { get; }
```

- *Type:* double

---

##### `CloudGateCorsAllowedOrigins`<sup>Required</sup> <a name="CloudGateCorsAllowedOrigins" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOrigins"></a>

```csharp
public string[] CloudGateCorsAllowedOrigins { get; }
```

- *Type:* string[]

---

##### `CloudGateCorsAllowNullOrigin`<sup>Required</sup> <a name="CloudGateCorsAllowNullOrigin" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOrigin"></a>

```csharp
public object CloudGateCorsAllowNullOrigin { get; }
```

- *Type:* object

---

##### `CloudGateCorsEnabled`<sup>Required</sup> <a name="CloudGateCorsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabled"></a>

```csharp
public object CloudGateCorsEnabled { get; }
```

- *Type:* object

---

##### `CloudGateCorsExposedHeaders`<sup>Required</sup> <a name="CloudGateCorsExposedHeaders" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeaders"></a>

```csharp
public string[] CloudGateCorsExposedHeaders { get; }
```

- *Type:* string[]

---

##### `CloudGateCorsMaxAge`<sup>Required</sup> <a name="CloudGateCorsMaxAge" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAge"></a>

```csharp
public double CloudGateCorsMaxAge { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettingsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSettingCloudGateCorsSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCloudGateCorsSettings">IdentityDomainsSettingCloudGateCorsSettings</a>

---


### IdentityDomainsSettingCompanyNamesList <a name="IdentityDomainsSettingCompanyNamesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingCompanyNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.get"></a>

```csharp
private IdentityDomainsSettingCompanyNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingCompanyNamesOutputReference <a name="IdentityDomainsSettingCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingCompanyNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingCompanyNamesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingDefaultCompanyNamesList <a name="IdentityDomainsSettingDefaultCompanyNamesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingDefaultCompanyNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.get"></a>

```csharp
private IdentityDomainsSettingDefaultCompanyNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSettingDefaultCompanyNamesOutputReference <a name="IdentityDomainsSettingDefaultCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingDefaultCompanyNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames">IdentityDomainsSettingDefaultCompanyNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNamesOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSettingDefaultCompanyNames InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultCompanyNames">IdentityDomainsSettingDefaultCompanyNames</a>

---


### IdentityDomainsSettingDefaultImagesList <a name="IdentityDomainsSettingDefaultImagesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingDefaultImagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.get"></a>

```csharp
private IdentityDomainsSettingDefaultImagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSettingDefaultImagesOutputReference <a name="IdentityDomainsSettingDefaultImagesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingDefaultImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages">IdentityDomainsSettingDefaultImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImagesOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSettingDefaultImages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultImages">IdentityDomainsSettingDefaultImages</a>

---


### IdentityDomainsSettingDefaultLoginTextsList <a name="IdentityDomainsSettingDefaultLoginTextsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingDefaultLoginTextsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.get"></a>

```csharp
private IdentityDomainsSettingDefaultLoginTextsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSettingDefaultLoginTextsOutputReference <a name="IdentityDomainsSettingDefaultLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingDefaultLoginTextsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts">IdentityDomainsSettingDefaultLoginTexts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTextsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSettingDefaultLoginTexts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingDefaultLoginTexts">IdentityDomainsSettingDefaultLoginTexts</a>

---


### IdentityDomainsSettingIdcsCreatedByList <a name="IdentityDomainsSettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.get"></a>

```csharp
private IdentityDomainsSettingIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSettingIdcsCreatedByOutputReference <a name="IdentityDomainsSettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy">IdentityDomainsSettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSettingIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsCreatedBy">IdentityDomainsSettingIdcsCreatedBy</a>

---


### IdentityDomainsSettingIdcsLastModifiedByList <a name="IdentityDomainsSettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.get"></a>

```csharp
private IdentityDomainsSettingIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSettingIdcsLastModifiedByOutputReference <a name="IdentityDomainsSettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy">IdentityDomainsSettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSettingIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingIdcsLastModifiedBy">IdentityDomainsSettingIdcsLastModifiedBy</a>

---


### IdentityDomainsSettingImagesList <a name="IdentityDomainsSettingImagesList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingImagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.get"></a>

```csharp
private IdentityDomainsSettingImagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingImagesOutputReference <a name="IdentityDomainsSettingImagesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplay` <a name="ResetDisplay" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.resetDisplay"></a>

```csharp
private void ResetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.displayInput">DisplayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.displayInput"></a>

```csharp
public string DisplayInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingImagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingLoginTextsList <a name="IdentityDomainsSettingLoginTextsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingLoginTextsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.get"></a>

```csharp
private IdentityDomainsSettingLoginTextsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingLoginTextsOutputReference <a name="IdentityDomainsSettingLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingLoginTextsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingLoginTextsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingMetaList <a name="IdentityDomainsSettingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.get"></a>

```csharp
private IdentityDomainsSettingMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSettingMetaOutputReference <a name="IdentityDomainsSettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta">IdentityDomainsSettingMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMetaOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSettingMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingMeta">IdentityDomainsSettingMeta</a>

---


### IdentityDomainsSettingPurgeConfigsList <a name="IdentityDomainsSettingPurgeConfigsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingPurgeConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.get"></a>

```csharp
private IdentityDomainsSettingPurgeConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingPurgeConfigsOutputReference <a name="IdentityDomainsSettingPurgeConfigsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingPurgeConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriodInput"></a>

```csharp
public double RetentionPeriodInput { get; }
```

- *Type:* double

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingPurgeConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingTagsList <a name="IdentityDomainsSettingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.get"></a>

```csharp
private IdentityDomainsSettingTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingTagsOutputReference <a name="IdentityDomainsSettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingTenantCustomClaimsList <a name="IdentityDomainsSettingTenantCustomClaimsList" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingTenantCustomClaimsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.get"></a>

```csharp
private IdentityDomainsSettingTenantCustomClaimsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingTenantCustomClaimsOutputReference <a name="IdentityDomainsSettingTenantCustomClaimsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingTenantCustomClaimsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopes` <a name="ResetScopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopesInput">AllScopesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopes">AllScopes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expression">Expression</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllScopesInput`<sup>Optional</sup> <a name="AllScopesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopesInput"></a>

```csharp
public object AllScopesInput { get; }
```

- *Type:* object

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expressionInput"></a>

```csharp
public object ExpressionInput { get; }
```

- *Type:* object

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AllScopes`<sup>Required</sup> <a name="AllScopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.allScopes"></a>

```csharp
public object AllScopes { get; }
```

- *Type:* object

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.expression"></a>

```csharp
public object Expression { get; }
```

- *Type:* object

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTenantCustomClaimsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSettingTimeoutsOutputReference <a name="IdentityDomainsSettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSetting.IdentityDomainsSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



